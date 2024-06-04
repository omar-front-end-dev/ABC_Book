import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

export const NavigationBarSM = () => {
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
          "&:hover": { bgcolor: theme.palette.mainColor.main },
        }}
        onClick={toggleDrawer(true)}
      >
        Menu <MenuRoundedIcon />
      </Button>
      <Drawer anchor="top" open={state} onClose={toggleDrawer(false)}>
        <Box sx={{ width: "auto", py: "15px" }} onClick={toggleDrawer(false)}>
          <List>
            <ListItem>
              <ListItemButton>
                <Link
                  className="nav__link"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: theme.palette.secondTextColor.main,
                    transition: ".2s",
                  }}
                  to={"/"}
                >
                  home
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link
                  className="nav__link"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: theme.palette.secondTextColor.main,
                    transition: ".2s",
                  }}
                  to={"/about"}
                >
                  about
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link
                  className="nav__link"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: theme.palette.secondTextColor.main,
                    transition: ".2s",
                  }}
                  to={"/categories"}
                >
                  categories
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link
                  className="nav__link"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: theme.palette.secondTextColor.main,
                    transition: ".2s",
                  }}
                  to={"/Categories"}
                >
                  pages
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link
                  className="nav__link"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: theme.palette.secondTextColor.main,
                    transition: ".2s",
                  }}
                  to={"/Categories"}
                >
                  contact
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
