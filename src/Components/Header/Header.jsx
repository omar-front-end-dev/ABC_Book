import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import { HeaderLogo } from "./HeaderComponents/HeaderLogo";
import { HeaderSearch } from "./HeaderComponents/HeaderSearch";
import { HeaderUserPages } from "./HeaderComponents/HeaderUserPages";

import "./Header.css";

export const Header = () => {
  const theme = useTheme();
  return (
    <Box
      component={"header"}
      sx={{ bgcolor: theme.palette.colorWhite.main, py: "25px" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", lg: "row" },
            gap: 2,
          }}
        >
          <Box className="header__logo" sx={{ flex: { xs: 1, lg: "1" } }}>
            <HeaderLogo />
          </Box>
          <Box
            className="header__Search"
            sx={{ flex: { xs: 1, lg: "2", width: "100%" } }}
          >
            <HeaderSearch />
          </Box>
          <Box className="header__user-pages" sx={{ flex: { xs: 1, lg: "2.7",} }}>
            <HeaderUserPages />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
