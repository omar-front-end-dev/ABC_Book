import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export const SingleProductContent = ({ book }) => {
 

  const theme = useTheme();
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
          alt=""
        />
        <Box>
          <Typography
            component={"h3"}
            sx={{
              fontSize: { xs: "18px", md: "30px" },
              fontWeight: "600",
              mb: "16px",
            }}
          >
            <strong>Title :</strong> {book.title}
          </Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "14px", fontWeight: "300", mb: "16px" }}
          >
            <strong>Description :</strong> {book.description}
          </Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "20px", fontWeight: "500", mb: "16px" }}
          >
            <strong>price :</strong> {book.price}
          </Typography>
          <Button
            className="main-hover-button"
            sx={{
              color: theme.palette.colorWhite.main,
              bgcolor: theme.palette.mainColor.main,
              borderRadius: "30px",
              padding: "15px 20px",
              overflow: "hidden",
              textAlign: "center",
              "&:hover": { bgcolor: theme.palette.mainColor.main },
              gap: 1,
            }}
          >
            Add To Cart
            <AddShoppingCartOutlinedIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SingleProductContent.propTypes = {
  book: PropTypes.object,
};
