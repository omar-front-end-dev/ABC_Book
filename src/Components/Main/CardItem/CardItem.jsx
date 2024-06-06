import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";
import "./CardItem.css"

export const CardItem = ({ book }) => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Link to={`books/${book.id}`}>
        <img
            className="card__image"
          style={{ width: "100%", objectFit: "cover" }}
          src={book.image}
          alt={book.title}
        />
        <Box
          sx={{p: "10px"}}
        >
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
