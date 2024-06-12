import { TableBody } from "@mui/material";
import { OrderItem } from "./OrderItem";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";

export const OrderList = ({ orders }) => {
  const { isAuth } = useSelector((state) => state.authReducer);

  return (
    <TableBody>
      {isAuth && (
        <>
          {orders.map((order) => {
            return <OrderItem key={order.orderId} order={order} />;
          })}
        </>
      )}
    </TableBody>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array,
};
