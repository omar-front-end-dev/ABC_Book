import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { PropTypes } from "prop-types";
import { useAuthorizedGetData } from "../../../Hooks/useAuthorizedGetData";

export const CartPaymentPaypal = ({ setIsCompletedOrder }) => {
  const theme = useTheme();
  const { data } = useAuthorizedGetData("cart");

  const newTotalPrice = data?.data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.totalPrice;
  }, 0);

  

  const createOrder = (data, actions) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Cool looking table",
          amount: {
            currency_code: "USD",
            value: newTotalPrice,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    setIsCompletedOrder(order.status);
  };

  const onError = (err) => {
    console.error("Payment Error: ", err);
  };

  return (
    <Box sx={{ position: "sticky", top: 130 }}>
      <Typography
        component="h3"
        sx={{ fontSize: "25px", color: theme.palette.secondTextColor.main, py: "10px" }}
      >
        Total Price:{" "}
        <strong style={{ color: theme.palette.mainColor.main }}>
          {newTotalPrice} $
        </strong>
      </Typography>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </Box>
  );
};

CartPaymentPaypal.propTypes = {
  setIsCompletedOrder: PropTypes.func,
};
