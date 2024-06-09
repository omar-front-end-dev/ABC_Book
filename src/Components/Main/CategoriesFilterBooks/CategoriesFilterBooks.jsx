import { useTheme } from "@emotion/react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export const CategoriesFilterBooks = ({ categories, setSelectedCategory }) => {
  const theme = useTheme();
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <Box>
      <Typography
        component={"h5"}
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          fontFamily: "sans",
          color: theme.palette.firstTextColor.main,
          mb: "15px",
        }}
      >
        Filter by Genres
      </Typography>
      <FormControl>
        <RadioGroup
          name="categories-radio-buttons-group"
          aria-labelledby="categories-radio-buttons-group-label"
          onChange={handleRadioChange}
        >
          {categories?.map((category, index) => (
            <FormControlLabel
              sx={{
                color: theme.palette.secondTextColor.main,
                textTransform: "capitalize",
              }}
              key={index}
              value={category.name}
              control={
                <Radio
                  sx={{ py: "5px", color: theme.palette.secondTextColor.main }}
                />
              }
              label={category.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

CategoriesFilterBooks.propTypes = {
  categories: PropTypes.array,
  setSelectedCategory: PropTypes.func,
};
