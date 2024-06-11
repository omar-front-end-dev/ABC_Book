import { useTheme } from "@emotion/react";
import { Button, TableCell, TableRow } from "@mui/material";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useAuthorizedPostData } from "../../../Hooks/useAuthorizedPostData";
import { useAuthorizedGetData } from "../../../Hooks/useAuthorizedGetData";
import toast from "react-hot-toast";


export const WishlistItem = ({ wishlist }) => {
  const theme = useTheme();
  const { mutate: removeFromWishlist, isLoading: isRemovingFromWishlist } =
    useAuthorizedPostData("wishlist/remove");
  const { image, title, category, description, price, id } = wishlist.book;
  const { refetch: refetchWishlist } = useAuthorizedGetData("wishlist/get");

  const removeFromWishlistHandler = (id) => {
    removeFromWishlist(
      { wishlistId: id },
      {
        onSuccess: () => {
          toast.success("Removed from wishlist successfully");
          refetchWishlist();
          },
      }
    );
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
        scope="row"
      >
        <img style={{ width: "100px" }} src={image} alt={title} />
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {title}
      </TableCell>

      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {category}
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {description.slice(0, 50)}....
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        {price}
      </TableCell>
      <TableCell
        sx={{ color: theme.palette.secondTextColor.main, fontSize: "16px" }}
        align="center"
      >
        <Link
          to={`/books/${id}`}
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
          onClick={() => removeFromWishlistHandler(wishlist.id)}
          className="main-hover-button"
          sx={{
            p: "10px 15px",
            bgcolor: theme.palette.mainColor.main,
            color: theme.palette.colorWhite.main,
            "&:hover": { bgcolor: theme.palette.mainColor.main },
            overflow: "hidden",
          }}
        >
          {isRemovingFromWishlist ? "deleting...." : "delete"}
        </Button>
      </TableCell>
    </TableRow>
  );
};

WishlistItem.propTypes = {
  wishlist: PropTypes.object,
};
