import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { CartPaymentForm } from "./CartPaymentForm";
import { CartPaymentPaypal } from "./CartPaymentPaypal";
import { useTheme } from "@emotion/react";

export const CartPayment = () => {
  const [isCompletedOrder, setIsCompletedOrder] = useState("");
  const theme = useTheme();

  return (
    <Box>
      <Typography
        component={"h5"}
        sx={{
          color: theme.palette.secondTextColor.main,
          fontSize: "20px",
          fontWeight: "bold",
          pb: "15px"
        }}
      >
        Check Out
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flexBasis: { xs: "100%", md: "55%" } }}>
          <CartPaymentForm isCompletedOrder={isCompletedOrder} />
        </Box>
        <Box sx={{ flexBasis: { xs: "100%", md: "50%" } }}>
          <CartPaymentPaypal setIsCompletedOrder={setIsCompletedOrder} />
        </Box>
      </Box>
    </Box>
  );
};

CartPayment.propTypes = {
  cartData: PropTypes.array,
};
