import { useTheme } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ShoppingFilterContent } from "./ShoppingFilterContent";
import { ShoppingBooksContent } from "./ShoppingBooksContent";
import { ShoppingDrawer } from "./ShoppingDrawer";

export const ShoppingContent = () => {
  const theme = useTheme();
  const [currentCategory, setCurrentCategory] = useState("");
  const [priceRange, setPriceRange] = useState({
    minPrice: 0,
    maxPrice: 1000,
  });
  const [rangeBetween, setRangeBetween] = useState("");
  const [siFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 330) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Box sx={{ py: theme.palette.sectionPaddingY.main }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3.5}>
            <Box
              sx={{
                border: `1px solid #ddd`,
                display: { xs: "none", md: "block" },
                p: "20px 25px",
              }}
            >
              <ShoppingFilterContent
                setCurrentCategory={setCurrentCategory}
                setPriceRange={setPriceRange}
                minPrice={priceRange.minPrice}
                maxPrice={priceRange.maxPrice}
                setRangeBetween={setRangeBetween}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: siFixed ? "fixed" : "static",
                top: "150px",
                zIndex: "1000",
              }}
            >
              <ShoppingDrawer  setCurrentCategory={setCurrentCategory}
                setPriceRange={setPriceRange}
                minPrice={priceRange.minPrice}
                maxPrice={priceRange.maxPrice}
                setRangeBetween={setRangeBetween}
                />
            </Box>
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
    </Box>
  );
};