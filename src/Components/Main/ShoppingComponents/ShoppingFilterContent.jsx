import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { CategoriesFilterBooks } from "../CategoriesFilterBooks/CategoriesFilterBooks";
import { useGetData } from "../../../Hooks/useGetData";
// import { useState, useEffect } from "react";

export const ShoppingFilterContent = ({
  setCurrentCategory,
  setPriceRange,
  setRangeBetween,
  // minPrice,
  // maxPrice
}) => {
  const theme = useTheme();
  const { data } = useGetData("categories");
  
  

 

  // const handleSlider1Change = (event) => {
  //   const value = parseInt(event.target.value);
  //   if (value <= slider2Value) {
  //     setPriceRange(value);
  //   }
  // };

  const handleSlider2Change = (event) => {
    const value = parseInt(event.target.value);
    if (value >= slider1Value) {
      setSlider2Value(value);
    }
  };

  return (
    <Box>
      <Box sx={{ mb: "25px" }}>
        <CategoriesFilterBooks
          categories={data?.data}
          setSelectedCategory={setCurrentCategory}
        />
      </Box>
      {/* <Box>
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

        <Box>
          <Box sx={{ mb: "10px" }}>
            <label htmlFor="slider1">Min Price:</label>
            <input
              type="range"
              id="slider1"
              name="slider1"
              min="0"
              max="1000"
              value={slider1Value}
              onChange={handleSlider1Change}
              style={{ width: "100%" }}
            />
            <Typography>{slider1Value}</Typography>
          </Box>
          <Box>
            <label htmlFor="slider2">Max Price:</label>
            <input
              type="range"
              id="slider2"
              name="slider2"
              min="0"
              max="1000"
              value={slider2Value}
              onChange={handleSlider2Change}
              style={{ width: "100%" }}
            />
            <Typography>{slider2Value}</Typography>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};


ShoppingFilterContent.propTypes = {
  setCurrentCategory: PropTypes.func,
  setPriceRange: PropTypes.func,
  setRangeBetween: PropTypes.func,
};
