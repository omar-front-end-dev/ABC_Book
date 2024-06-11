import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PropTypes } from "prop-types";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
export const NavigationBarSM = ({ categories, pageLinks }) => {
  const [state, setState] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => () => {
    setState(open);
  };

  return (
    <Box sx={{ textAlign: "end" }}>
      <Button
        className="main-hover-button"
        sx={{
          bgcolor: theme.palette.mainColor.main,
          color: theme.palette.colorWhite.main,
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s, transform 0.3s",
          "&:hover": {
            bgcolor: theme.palette.mainColor.main,
            transform: "scale(1.05)",
          },
        }}
        onClick={toggleDrawer(true)}
      >
        Menu <MenuRoundedIcon />
      </Button>
      <Drawer
        anchor="top"
        open={state}
        onClose={toggleDrawer(false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: theme.palette.background.default,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "0 0 16px 16px",
          },
        }}
      >
        <Box sx={{ width: "auto", py: "15px" }}>
          <List>
            <ListItem onClick={toggleDrawer(false)}>
              <Link
                className="nav__link"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: theme.palette.secondTextColor.main,
                  transition: "color 0.3s",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "5px 10px",
                }}
                to={"/"}
              >
                Home
                <HomeOutlinedIcon />
              </Link>
            </ListItem>

            <ListItem onClick={toggleDrawer(false)}>
              <Link
                className="nav__link"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: theme.palette.secondTextColor.main,
                  transition: "color 0.3s",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "5px 10px",
                }}
                to={"/shopping"}
              >
                shopping
                <ShoppingBasketOutlinedIcon />
              </Link>
            </ListItem>

            <Accordion
              sx={{
                width: "100%",
                boxShadow: "none",
                p: "0px 10px",
              }}
            >
              <AccordionSummary
                className="nav__link"
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: theme.palette.secondTextColor.main,
                  transition: "color 0.3s",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                Categories
              </AccordionSummary>
              <AccordionDetails sx={{ "&:hover": { bgcolor: "#fff" }, p: 0 }}>
                <List sx={{ p: 0 }}>
                  {categories?.map((category, index) => {
                    return (
                      <ListItem
                        onClick={toggleDrawer(false)}
                        key={index}
                        sx={{ py: "5px" }}
                      >
                        <Link
                          className="nav__link"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: theme.palette.secondTextColor.main,
                            transition: "color 0.3s",
                            display: "flex",
                            width: "100%",
                            padding: "5px 20px",
                          }}
                          to={`/shopping-category/${category?.name}`}
                        >
                          {category.name}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                width: "100%",
                boxShadow: "none",
                p: "0px 10px",
              }}
            >
              <AccordionSummary
                className="nav__link"
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: theme.palette.secondTextColor.main,
                  transition: "color 0.3s",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                pages
              </AccordionSummary>
              <AccordionDetails sx={{ "&:hover": { bgcolor: "#fff" }, p: 0 }}>
                <List sx={{ p: 0 }}>
                  {pageLinks.map((link, index) => {
                    return (
                      <ListItem
                        onClick={toggleDrawer(false)}
                        key={index}
                        sx={{ py: "5px" }}
                      >
                        <Link
                          className="nav__link"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: theme.palette.secondTextColor.main,
                            transition: "color 0.3s",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            padding: "5px 20px",
                          }}
                          to={`${link.linkTo}`}
                        >
                          {link.linkName}
                          {link.linkIcon}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

NavigationBarSM.propTypes = {
  categories: PropTypes.array,
  pageLinks: PropTypes.array,
};
