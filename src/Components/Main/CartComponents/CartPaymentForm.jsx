import { useTheme } from "@emotion/react";
import { Box, TextField } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import axios from "axios";
import { baseURL } from "../../../../config";
import { useAuthorizedGetData } from "../../../Hooks/useAuthorizedGetData";

export const CartPaymentForm = ({ isCompletedOrder }) => {
  const theme = useTheme();
  const formikRef = useRef(null);
  const { data: userInfo } = useAuthorizedGetData("user");
  const { refetch } = useAuthorizedGetData("cart");

  const [initialValues, setInitialValues] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    customerAddress: "",
    notes: "",
  });

  const validationSchema = Yup.object({
    customerName: Yup.string()
      .required("First Name is required")
      .min(3, "First Name must be at least 3 characters"),
    customerEmail: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    customerPhone: Yup.string()
      .typeError("Phone number must be a number")
      .required("Phone is required")
      .max(14, "Invalid Phone Number")
      .min(5, "Invalid Phone Number"),
    customerAddress: Yup.string().required("Address is required"),
    notes: Yup.string(),
  });

  const postOrderData = async (data) => {
    const token = localStorage.getItem("user_data");
    try {
      await axios.post(`${baseURL}/orders`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    if (isCompletedOrder === "COMPLETED" && isCompletedOrder !== "") {
      formikRef.current.submitForm();
      toast.success("The order was made successfully");
      refetch()
    }
  }, [isCompletedOrder, refetch]);

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    await postOrderData(values);
    resetForm();
    setSubmitting(false);
  };

  useEffect(() => {
    if (userInfo) {
      setInitialValues((prevValues) => ({
        ...prevValues,
        customerName: userInfo.name || "",
        customerEmail: userInfo.email || "",
      }));
    }
  }, [userInfo]);

  return (
    <Box>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Box sx={{ mb: "10px" }}>
            <Field name="customerName">
              {({ field }) => (
                <TextField
                  {...field}
                  id="outlined-basic"
                  label="Name"
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
              name="customerName"
              component="div"
            />
          </Box>
          <Box sx={{ mb: "10px" }}>
            <Field name="customerEmail">
              {({ field }) => (
                <TextField
                  {...field}
                  type="email"
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
              name="customerEmail"
              component="div"
            />
          </Box>
          <Box sx={{ mb: "10px" }}>
            <Field name="customerPhone">
              {({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  id="outlined-basic"
                  label="Phone Number"
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
              name="customerPhone"
              component="div"
            />
          </Box>
          <Box sx={{ mb: "10px" }}>
            <Field name="customerAddress">
              {({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  id="outlined-basic"
                  label="Address"
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
              name="customerAddress"
              component="div"
            />
          </Box>
          <Box sx={{ mb: "10px" }}>
            <Field name="notes">
              {({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  id="outlined-basic"
                  label="Notes"
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
              name="notes"
              component="div"
            />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

CartPaymentForm.propTypes = {
  isCompletedOrder: PropTypes.string,
};
