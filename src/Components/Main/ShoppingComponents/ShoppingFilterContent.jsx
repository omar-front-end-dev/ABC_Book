import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";
import { CategoriesFilterBooks } from "../CategoriesFilterBooks/CategoriesFilterBooks";
import { useGetData } from "../../../Hooks/useGetData";

export const ShoppingFilterContent = ({
  setCurrentCategory,
  setPriceRange,
  setRangeBetween,
}) => {
  const theme = useTheme();
  const { data } = useGetData("categories");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    setPriceRange({ minPrice, maxPrice });
  }, [minPrice, maxPrice, setPriceRange]);

  const handleSlider1Change = (e) => {
    setMinPrice(e.target.value);
  };

  const handleSlider2Change = (e) => {
    setMaxPrice(e.target.value);
  };

  

  return (
    <Box>
      <Box>
        <CategoriesFilterBooks
          categories={data?.data}
          setSelectedCategory={setCurrentCategory}
        />
      </Box>
      <Box sx={{ p: "10px 25px" }}>
        <Typography
          component={"h5"}
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: theme.palette.firstTextColor.main,
            mb: "15px",
          }}
        >
          Filter by Price
        </Typography>

        <Box sx={{ mb: "15px" }}>
          <Box sx={{ mb: "10px" }}>
            <label htmlFor="slider1">Min Price:</label>
            <input
              type="range"
              id="slider1"
              name="slider1"
              min="0"
              max="500"
              value={minPrice}
              onChange={handleSlider1Change}
              style={{ width: "100%" }}
            />
            <Typography>{minPrice}$</Typography>
          </Box>
          <Box>
            <label htmlFor="slider2">Max Price:</label>
            <input
              type="range"
              id="slider2"
              name="slider2"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={handleSlider2Change}
              style={{ width: "100%" }}
            />
            <Typography>{maxPrice}$</Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            component={"h5"}
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              color: theme.palette.firstTextColor.main,
              mb: "15px",
            }}
          >
            Filter Sort by price
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              onClick={() => setRangeBetween("high")}
              className="main-hover-button"
              sx={{
                bgcolor: theme.palette.mainColor.main,
                width: "40%",
                overflow: "hidden",
                transition: ".2s",
                "&:hover": {
                  bgcolor: theme.palette.mainColor.main,
                  transform: "scale(1.03)",
                },
                color: "#fff",
              }}
            >
              high
            </Button>
            <Button
              onClick={() => setRangeBetween("low")}
              className="main-hover-button"
              sx={{
                bgcolor: theme.palette.firstTextColor.main,
                width: "40%",
                overflow: "hidden",
                transition: ".2s",
                "&:hover": {
                  bgcolor: theme.palette.firstTextColor.main,
                  transform: "scale(1.03)",
                },
                color: "#fff",
              }}
            >
              low
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ShoppingFilterContent.propTypes = {
  setCurrentCategory: PropTypes.func,
  setPriceRange: PropTypes.func,
  setRangeBetween: PropTypes.func,
};
