import { Box, Container, Grid } from "@mui/material";
import { CategoriesFilterBooks } from "../CategoriesFilterBooks/CategoriesFilterBooks";
import { ShoppingByCategoryBanner } from "./ShoppingByCategoryBanner";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { ShoppingByCategoryProducts } from "./ShoppingByCategoryProducts";
import { CategoriesFilterBooksDrawer } from "./CategoriesFilterBooksDrawer";

export const ShoppingByCategoryContent = ({ categories }) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [siFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 470) {
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
      <Box sx={{ bgcolor: theme.palette.sectionBgColor.main }}>
        <Container maxWidth="lg">
          <ShoppingByCategoryBanner />
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              py: theme.palette.sectionPaddingY.main,
            }}
          >
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
                  <CategoriesFilterBooks
                    categories={categories}
                    setSelectedCategory={setSelectedCategory}
                  />
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                      position: siFixed ? "fixed" : "static",
                      top: "150px",
                      zIndex: "1000",
                    },
                  }}
                >
                  <CategoriesFilterBooksDrawer categories={categories}
                    setSelectedCategory={setSelectedCategory} />
                </Box>
              </Grid>
              <Grid item xs={12} md={8.5}>
                <ShoppingByCategoryProducts
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </Grid>
            </Grid>
          </Box>
          <Box></Box>
        </Container>
      </Box>
    </Box>
  );
};

ShoppingByCategoryContent.propTypes = {
  categories: PropTypes.array,
};
