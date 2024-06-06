import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { usePostData } from "../../../Hooks/usePostData";
import { useDispatch } from "react-redux";
import { login } from "../../../RTK/slices/authSlice"

export const Login = () => {
  const { mutate, isLoading, error, data, isSuccess } = usePostData("auth/login");
  const dispatch = useDispatch()

  

  const theme = useTheme();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 6 characters")
      .required("Password is required"),
  });


  const onSubmit = (values, { setSubmitting, resetForm }) => {
    mutate(values);
    if(isSuccess){
      dispatch(login(data.data.token))
      toast.success("You have been logged in successfully")
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
        {({ isSubmitting }) => (
          <Form>
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
                  />
                )}
              </Field>
              <ErrorMessage
                style={{
                  color: theme.palette.mainColor.main,
                  fontSize: "15px",
                }}
                name="email"
                component="div"
              />
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
                  />
                )}
              </Field>
              <ErrorMessage
                style={{
                  color: theme.palette.mainColor.main,
                  fontSize: "15px",
                }}
                name="password"
                component="div"
              />
            </Box>

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
                Don’t have an account?{" "}
                <Link
                  style={{ color: theme.palette.mainColor.main }}
                  to={"/authentication/register"}
                >
                  <strong>create account</strong>
                </Link>{" "}
                here
              </Typography>

              <Button
                className="main-hover-button"
                sx={{
                  width: "120px",
                  height: "50px",
                  bgcolor: theme.palette.mainColor.main,
                  color: theme.palette.colorWhite.main,
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
                
                {isLoading ? "loaded..." : "login"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
