import AppsIcon from "@mui/icons-material/Apps";
import { useTheme } from "@emotion/react";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { ShoppingFilterContent } from "./ShoppingFilterContent";
import { PropTypes } from "prop-types";

export const ShoppingDrawer = ({
  setCurrentCategory,
  setPriceRange,
  minPrice,
  maxPrice,
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <ShoppingFilterContent
        setCurrentCategory={setCurrentCategory}
        setPriceRange={setPriceRange}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <Divider />
    </Box>
  );

  return (
    <Box>
      <IconButton
        sx={{
          color: "#fff",
          bgcolor: theme.palette.mainColor.main,
          "&:hover": { bgcolor: theme.palette.mainColor.main },
        }}
        onClick={toggleDrawer(true)}
      >
        <AppsIcon sx={{ fontSize: "25px" }} />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

ShoppingDrawer.propTypes = {
  setCurrentCategory: PropTypes.func,
  setPriceRange: PropTypes.func,
  minPrice: PropTypes.any,
  maxPrice: PropTypes.any,
};
