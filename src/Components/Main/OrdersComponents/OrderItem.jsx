import { useTheme } from "@emotion/react";
import { TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export const OrderItem = ({ order }) => {
  const theme = useTheme();
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
        scope="row"
      >
        {order.customerName}
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {order.customerEmail}
      </TableCell>

      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {order.customerAddress}
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {order.customerPhone}
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {order.finalPrice} $
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "15px" }}
        align="center"
      >
        <Link
          to={`/orders-page/${order.orderId}`}
          className="main-hover-button"
          style={{
            padding: "10px 16px",
            borderRadius: "4px",
            position: "relative",
            background: theme.palette.firstTextColor.main,
            color: theme.palette.colorWhite.main,
            overflow: "hidden",
            display: "inline-block",
            width: "120px",
          }}
        >
          View details
        </Link>
      </TableCell>
    </TableRow>
    
  );
};

OrderItem.propTypes = {
  order: PropTypes.object,
};
