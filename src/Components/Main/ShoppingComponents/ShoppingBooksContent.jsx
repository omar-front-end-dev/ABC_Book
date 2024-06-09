import { Box, Grid } from "@mui/material";
import { useGetData } from "../../../Hooks/useGetData";
import { CardItem } from "../CardItem/CardItem";
import { IsLoading } from "../IsLoading/IsLoading";
import { PropTypes } from "prop-types";


export const ShoppingBooksContent = ({
  currentCategory,
  priceRange,
  rangeBetween,
}) => {
  const { data, isLoading } = useGetData(
    `books?category=${currentCategory}&minPrice=${priceRange.minPrice}&maxPrice=${priceRange.maxPrice}&sort=${rangeBetween}`
  );

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

ShoppingBooksContent.propTypes = {
  currentCategory: PropTypes.string,
  priceRange: PropTypes.object,
  rangeBetween: PropTypes.string,
};
