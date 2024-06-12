import { Box, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../../../config";
import { logout } from "../../../RTK/slices/authSlice";
import { useDispatch } from "react-redux";

export const UpdateUserInfo = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 6 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const updateUserInfo = async (data) => {
    const token = localStorage.getItem("user_data");

    try {
      setIsLoading(true);
      dispatch(logout());
      await axios.put(`${baseURL}/user/update`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("User information updated successfully Please log back in");
      navigate("/authentication/login");
    } catch (error) {
      toast.error("Error updating user information");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    await updateUserInfo(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Box sx={{ width: { xs: "100%", md: "60%" }, m: "auto" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Box sx={{ mb: "10px" }}>
              <Field name="name">
                {({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                  />
                )}
              </Field>
            </Box>
            <Box sx={{ mb: "10px" }}>
              <Field name="email">
                {({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />
                )}
              </Field>
            </Box>
            <Box sx={{ mb: "10px" }}>
              <Field name="password">
                {({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                  />
                )}
              </Field>
            </Box>
            <Box sx={{ mb: "10px" }}>
              <Field name="password_confirmation">
                {({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.password_confirmation)}
                    helperText={errors.password_confirmation}
                  />
                )}
              </Field>
            </Box>
            {errors.general && (
              <Box sx={{ color: "red", mb: "10px" }}>{errors.general}</Box>
            )}
            <Box
              sx={{
                py: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { xs: "column-reverse", md: "row" },
              }}
            >
              <Typography
                component={"p"}
                sx={{
                  color: theme.palette.secondTextColor.main,
                  textTransform: "capitalize",
                  fontSize: { xs: "13px", md: "15px" },
                }}
              >
                Go to{" "}
                <Link
                  style={{ color: theme.palette.mainColor.main }}
                  to={"/user-account/user-info"}
                >
                  <strong>your information</strong>
                </Link>{" "}
                from here
              </Typography>

              <Button
                className="main-hover-button"
                sx={{
                  width: "120px",
                  height: "50px",
                  bgcolor: theme.palette.mainColor.main,
                  color: theme.palette.common.white,
                  overflow: "hidden",
                  "&:hover": { bgcolor: theme.palette.mainColor.main },
                  fontSize: "17px",
                  borderRadius: "1px",
                  textTransform: "capitalize",
                  mb: { xs: "20px", md: "0" },
                }}
                type="submit"
                disabled={isSubmitting}
              >
                {isLoading ? "Loading..." : "Update"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
