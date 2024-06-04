import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationBarLG = () => {
  const theme = useTheme()
  return (
    <Box>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <li>
          <Link
            className="nav__link"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
              color: theme.palette.secondTextColor.main,
              transition: ".2s"
            }}
            to={"/"}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            className="nav__link"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
              color: theme.palette.secondTextColor.main,
              transition: ".2s"
            }}
            to={"/about"}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            className="nav__link"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
              color: theme.palette.secondTextColor.main,
              transition: ".2s"
            }}
            to={"/categories"}
          >
            categories
          </Link>
        </li>
        <li>
          <Link
            className="nav__link"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
              color: theme.palette.secondTextColor.main,
              transition: ".2s"
            }}
            to={"/Categories"}
          >
            pages
          </Link>
        </li>
        <li>
          <Link
            className="nav__link"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
              color: theme.palette.secondTextColor.main,
              transition: ".2s"
            }}
            to={"/Categories"}
          >
            contact
          </Link>
        </li>
      </ul>
    </Box>
  );
};
