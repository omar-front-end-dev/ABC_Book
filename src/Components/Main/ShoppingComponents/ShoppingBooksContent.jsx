import { Box, Grid, Typography } from "@mui/material";
import { useGetData } from "../../../Hooks/useGetData";
import { CardItem } from "../CardItem/CardItem";
import { IsLoading } from "../IsLoading/IsLoading";
import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";

export const ShoppingBooksContent = ({
  currentCategory,
  priceRange,
  rangeBetween,
}) => {
  const theme = useTheme() 
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
            {data?.data?.length < 1 ? (
              <Grid sx={{width: "100%", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center"}} item xs={12}>
                <Typography component={"h1"} sx={{fontSize: "30px", color: theme.palette.mainColor.main, fontWeight: "bold"}}>
                  No Result Found
                </Typography>
              </Grid>
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
