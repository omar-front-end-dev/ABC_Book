import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types"  

export const NavigationBarLG = ({ categories, pageLinks }) => {
  const theme = useTheme();

  

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
              transition: ".2s",
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
              transition: ".2s",
            }}
            to={"/shopping"}
          >
            shopping
          </Link>
        </li>
        <li style={{ position: "relative" }}>
          <span
            className="nav__link"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
              color: theme.palette.secondTextColor.main,
              transition: ".2s",
              cursor: "pointer",
            }}
          >
            categories
            <Box className="nav-dropdown__menu">
              <ul className="nav-dropdown__list">
                {categories?.map((category, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={`shopping-category/${category.name}`}
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          fontSize: "15px",
                          color: theme.palette.secondTextColor.main,
                          transition: ".2s",
                        }}
                        className="nav__link"
                      >
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Box>
          </span>
        </li>
        <li style={{ position: "relative" }}>
          <span
            className="nav__link"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
              color: theme.palette.secondTextColor.main,
              transition: ".2s",
              cursor: "pointer",
            }}
          >
            pages
            <Box className="nav-dropdown__menu">
              <ul className="nav-dropdown__list">
                {pageLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={link.linkTo}
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          fontSize: "15px",
                          color: theme.palette.secondTextColor.main,
                          transition: ".2s",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        className="nav__link"
                      >
                        {link.linkName}
                        {link.linkIcon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Box>
          </span>
        </li>
      </ul>
    </Box>
  );
};


NavigationBarLG.propTypes = {
  categories: PropTypes.array,
  pageLinks: PropTypes.array,
}