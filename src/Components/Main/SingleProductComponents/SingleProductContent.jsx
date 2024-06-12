import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { useAuthorizedPostData } from "../../../Hooks/useAuthorizedPostData";
import { useAuthorizedGetData } from "../../../Hooks/useAuthorizedGetData";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const SingleProductContent = ({ book }) => {
  const theme = useTheme();
  const { isAuth } = useSelector(state => state.authReducer);

  const {
    mutate: addToCart,
    isLoading: isAddingToCart,
  } = useAuthorizedPostData("cart");
  const { data: cartData, refetch: refetchCart } = useAuthorizedGetData("cart");

  const {
    mutate: addToWishlist,
    isLoading: isAddingToWishlist,
  } = useAuthorizedPostData("wishlist/add");
  const { refetch: refetchWishlist, } = useAuthorizedGetData("wishlist/count");


  const addToCartHandler = (id) => {
    const isBookInCart = cartData?.data.some((item) => item.bookId === id);
    
    if (!isAuth) {
        toast.error("Please create an account or log in");
        return;
    }

    if (!isBookInCart) {
        addToCart(
            { bookId: id },
            {
                onSuccess: () => {
                    toast.success("The book has been added to the shopping cart");
                    refetchCart();
                },
            }
        );
    } else {
        toast.error("This book already exists in the cart List");
    }
};

  const addToWishlistHandler = (id) => {
    if (!isAuth) {
      toast.error("Please create an account or log in");
      return;
  }
    addToWishlist(
      { bookId: id },
      {
        onSuccess: () => {
          toast.success("The book has been added to the wishlist");
          refetchWishlist();
        },
        onError: () => {
          toast.error(`The chosen book is already exists in the wishlist.`);
        },
      }
    );
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.secondTextColor.main,
        p: { xs: "15px", lg: "30px 50px" },
        color: theme.palette.colorWhite.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <img
          className="home-slider-book__image"
          style={{ width: "320px", height: "440px", objectFit: "cover" }}
          src={book.image}
          alt={book.title}
        />
        <Box>
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: "18px", md: "30px" },
              fontWeight: "600",
              mb: "10px",
            }}
          >
            <strong>Title :</strong> {book.title}
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "20px", fontWeight: "500", mb: "10px" }}
          >
            <strong>Price :</strong> {book.price}
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "14px", fontWeight: "300", mb: "16px" }}
          >
            <strong>Description :</strong> {book.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              onClick={() => addToCartHandler(book.id)}
              className="main-hover-button"
              sx={{
                color: theme.palette.colorWhite.main,
                bgcolor: theme.palette.mainColor.main,
                padding: "10px 15px",
                overflow: "hidden",
                textAlign: "center",
                "&:hover": { bgcolor: theme.palette.mainColor.main },
                gap: 1,
                fontSize: "14px",
                width: "100%",
              }}
            >
              {isAddingToCart ? (
                "Adding to cart ...."
              ) : (
                <>
                  {"Add To Cart"}
                  <AddShoppingCartOutlinedIcon />
                </>
              )}
            </Button>

            <Button
              onClick={() => addToWishlistHandler(book.id)}
              className="main-hover-button"
              sx={{
                color: theme.palette.colorWhite.main,
                bgcolor: theme.palette.firstTextColor.main,
                padding: "10px 15px",
                overflow: "hidden",
                textAlign: "center",
                "&:hover": { bgcolor: theme.palette.firstTextColor.main },
                gap: 1,
                fontSize: "14px",
                width: "100%",
              }}
            >
              {isAddingToWishlist ? (
                "Adding To Wishlist ..."
              ) : (
                <>
                  Add To Wishlist
                  <BookmarkAddOutlinedIcon />
                </>
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
SingleProductContent.propTypes = {
  book: PropTypes.object,
};
