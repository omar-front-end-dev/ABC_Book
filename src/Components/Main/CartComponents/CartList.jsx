import { TableBody } from "@mui/material";
import { PropTypes } from "prop-types";
import { CartItem } from "./CartItem";

export const CartList = ({ cartList }) => {

  return (
    <TableBody>
      {cartList?.map((cart) =>{
        return <CartItem key={cart.cartId} cart={cart} />
      })}
    </TableBody>
  );
};

CartList.propTypes = {
  cartList: PropTypes.array,
};