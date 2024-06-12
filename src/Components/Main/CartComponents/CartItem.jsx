import { useTheme } from "@emotion/react";
import { Button, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuthorizedPostData } from "../../../Hooks/useAuthorizedPostData";
import toast from "react-hot-toast";
import { useAuthorizedGetData } from "../../../Hooks/useAuthorizedGetData";
import axios from "axios";
import { baseURL } from "../../../../config";

export const CartItem = ({ cart }) => {
  const theme = useTheme();

  const { mutate: updateQuantity } = useAuthorizedPostData(`cart/${cart.cartId}`);
  const { refetch: refetchCart } = useAuthorizedGetData("cart");

  const updateQuantityHandler = (id, qty) => {
    updateQuantity(
      { cartId: id, qty },
      {
        onSuccess: () => {
          toast.success("Updated quantity successfully");
          refetchCart();
        },
      }
    );
  };

  

  const removeCartItem = async (id) => {
    const token = localStorage.getItem("user_data");
    toast.success("Removed successfully")
    try {
      await axios.delete(`${baseURL}/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cartId: id,
      });
      refetchCart()
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  

  const removeCartItemHandler = (id) => {
    removeCartItem(id);
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {cart.bookId}
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {cart.price} $
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        <input
          onChange={(e) => updateQuantityHandler(cart.cartId, parseInt(e.target.value))}
          defaultValue={cart.qty}
          style={{ padding: "10px", width: "100px", fontSize: "16px" }}
          type="number"
          min="1"
        />
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        <Link
          to={`/books/${cart.bookId}`}
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
          Show book
        </Link>
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        <Button
          className="main-hover-button"
          sx={{
            p: "10px 15px",
            bgcolor: theme.palette.mainColor.main,
            color: theme.palette.colorWhite.main,
            "&:hover": { bgcolor: theme.palette.mainColor.main },
            overflow: "hidden",
          }}
          onClick={() => removeCartItemHandler(cart.cartId)}
        >
          Delete
        </Button>
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {cart.totalPrice} $
      </TableCell>
    </TableRow>
  );
};

CartItem.propTypes = {
  cart: PropTypes.object,
};
