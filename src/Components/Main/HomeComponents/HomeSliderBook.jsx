import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const HomeSliderBook = ({ book }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.secondTextColor.main,
        p: {xs: "15px", lg: "30px 50px"},
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
            sx={{ fontSize: {xs: "18px", md: "30px"}, fontWeight: "600", mb: "16px" }}
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
          <Link
            to={`books/${book.id}`}
            className="main-hover-button"
            style={{
              position: "relative",
              display: "inline-block",
              color: theme.palette.colorWhite.main,
              background: theme.palette.mainColor.main,
              borderRadius: "30px",
              padding: "15px 20px",
              fontSize: "18px",
              overflow: "hidden",
              width: "150px",
              textAlign: "center"
            }}
          >
            View Details
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

HomeSliderBook.propTypes = {
  book: PropTypes.object,
};
