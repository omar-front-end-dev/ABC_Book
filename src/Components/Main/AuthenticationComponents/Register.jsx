import { Box, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { usePostData } from "../../../Hooks/usePostData";
import toast from "react-hot-toast";

export const Register = () => {
  const { mutate, isLoading } = usePostData("auth/register");
  const theme = useTheme();
  const navigate = useNavigate();

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

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("An account has been created successfully");
        navigate("/user-account/login");
        resetForm();
        setSubmitting(false);
      },
      onError: (error) => {
        toast.error(error.response.data.message);
        setSubmitting(false);
      },
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
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
                py: "20px",
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
                Already have an account?{" "}
                <Link
                  style={{ color: theme.palette.mainColor.main }}
                  to={"/user-account/login"}
                >
                  <strong>Login</strong>
                </Link>{" "}
                here
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
                {isLoading ? "Loading..." : "Sign Up"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
