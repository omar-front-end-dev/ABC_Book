import { Box, Grid } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useGetData } from "../../../Hooks/useGetData";
import { useEffect, useState } from "react";
import { IsLoading, CardItem } from "../../index";

export const ShoppingByCategoryProducts = ({
  selectedCategory,

}) => {
  const { category } = useParams();
  const [currentCategory, setCurrentCategory] = useState("");
  const location = useLocation();
  const { data, isLoading } = useGetData(`books?category=${currentCategory}`);

  useEffect(() => {
    if (location) {
      setCurrentCategory(category);
    }
    if (selectedCategory) {
      setCurrentCategory(selectedCategory);
    }
  }, [selectedCategory, category, location]);

  return (
    <Box>
      <Grid container spacing={3}>
        {isLoading ? (
          <IsLoading />
        ) : (
          <>
            {data?.data?.map((book) => {
              return (
                <Grid key={book.id} item xs={12} sm={6} lg={4}>
                  <CardItem book={book} />
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </Box>
  );
};

ShoppingByCategoryProducts.propTypes = {
  selectedCategory: PropTypes.string,
};
