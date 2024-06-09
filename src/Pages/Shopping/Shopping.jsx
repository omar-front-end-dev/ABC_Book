import { Box, Container, Grid } from "@mui/material";

import { useTheme } from "@emotion/react";
import { useState } from "react";
import {
  ShoppingBooksContent,
  ShoppingFilterContent,
} from "../../Components/index";
export const Shopping = () => {
  const theme = useTheme();
  const [currentCategory, setCurrentCategory] = useState("");
  const [priceRange, setPriceRange] = useState({
    minPrice: 0,
    maxPrice: 1000,
  });
  const [rangeBetween, setRangeBetween] = useState("");

  console.log(priceRange.maxPrice, priceRange.minPrice);

  return (
    <Box>
      <Container maxWidth="lg">
        <Box sx={{ py: theme.palette.sectionPaddingY.main }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3.5}>
              <Box
                sx={{
                  border: `1px solid #ddd`,
                  position: "sticky",
                  top: "150px",
                  display: { xs: "none", md: "block" },
                  p: "20px 25px",
                }}
              >
                <ShoppingFilterContent
                  setCurrentCategory={setCurrentCategory}
                  setPriceRange={setPriceRange}
                  setRangeBetween={setRangeBetween}
                  minPrice={priceRange.minPrice}
                  maxPrice={priceRange.maxPrice}
                  />
                  lll
              </Box>
              {/* <Box></Box> */}
            </Grid>
            <Grid item xs={12} md={8.5}>
              <ShoppingBooksContent
                currentCategory={currentCategory}
                priceRange={priceRange}
                rangeBetween={rangeBetween}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
