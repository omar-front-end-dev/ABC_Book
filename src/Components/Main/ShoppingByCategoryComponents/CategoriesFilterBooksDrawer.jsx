import AppsIcon from "@mui/icons-material/Apps";
import { useTheme } from "@emotion/react";
import { CategoriesFilterBooks } from "../CategoriesFilterBooks/CategoriesFilterBooks";
import { PropTypes } from "prop-types";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import { useState } from "react";

export function CategoriesFilterBooksDrawer({
  categories,
  setSelectedCategory,
}) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <CategoriesFilterBooks
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <Divider />
    </Box>
  );

  return (
    <Box>
      <IconButton
        sx={{
          color: theme.palette.secondTextColor.main,
          bgcolor: theme.palette.mainColor.main,
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
}

CategoriesFilterBooksDrawer.propTypes = {
  categories: PropTypes.array,
  setSelectedCategory: PropTypes.func,
};
