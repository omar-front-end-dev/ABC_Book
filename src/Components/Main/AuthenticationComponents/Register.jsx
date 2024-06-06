import { Box, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { usePostData } from "../../../Hooks/usePostData";
import toast from "react-hot-toast";

export const Register = () => {
  const { mutate, isLoading, error, isSuccess } = usePostData("auth/register");
  const theme = useTheme();

  

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    mutate(values);
    if(isSuccess){
      toast.success("An account has been created successfully")
    }else if(error){
      toast.error(error.response.data.message)
    }
    resetForm();
    setSubmitting(false);
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
              <Field name="confirmPassword">
                {({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword}
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
                  fontSize: {xs: "13px" , md: "15px"}
                }}
              >
                Already have an account?{" "}
                <Link
                  style={{ color: theme.palette.mainColor.main }} 
                  to={"/authentication/login"}
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
                {"Sign Up"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};