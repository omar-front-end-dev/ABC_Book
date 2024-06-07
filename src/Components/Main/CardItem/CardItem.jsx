import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";
import "./CardItem.css";

export const CardItem = ({ book }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        transition: ".2s",
        boxShadow: "0px 0px 2px 1px #00000063",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "0px 0px 6px 1px #000000a3",
        },
      }}
    >
      <Link to={`/books/${book.id}`}>
        <img
          className="card__image"
          style={{
            width: "100%",
            objectFit: "cover",
            borderBottom: `1px solid ${theme.palette.secondTextColor.main}`,
          }}
          src={book.image}
          alt={book.title}
        />
        <Box sx={{ p: "10px" }}>
          <Typography
            component={"h6"}
            sx={{
              color: theme.palette.secondTextColor.main,
              fontSize: { xs: "13px", sm: "15px", md: "15px" },
              fontWeight: "bold",
              mb: { xs: "10px", md: "0" },
            }}
          >
            {book.title}
          </Typography>

          <Typography
            component={"p"}
            sx={{
              color: theme.palette.mainColor.main,
              fontSize: { xs: "14px", md: "15px" },
              fontWeight: "bold",
            }}
          >
            {book.price}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

CardItem.propTypes = {
  book: PropTypes.object,
};
