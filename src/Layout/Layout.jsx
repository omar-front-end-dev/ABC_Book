import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme";
import { useEffect } from "react";
import { Header, Footer, ScrollUp, NavigationBar } from "../Components/index";
import { Authentication } from "../Pages/index"
export const Layout = () => {
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  const dd = false;

  return (
    <ThemeProvider theme={theme}>
      {!dd ? <Authentication/> :
      
      <Box component={"div"}>
        <Box component={"header"}>
          <Header />
        </Box>
        <Box component={"nav"}>
          <NavigationBar />
        </Box>
        <Box component={"main"}>
          <Outlet />
        </Box>
        <Box component={"div"}>
          <ScrollUp />
        </Box>
        <Box component={"footer"}>
          <Footer />
        </Box>
      </Box>
      }
    </ThemeProvider>
  );
};
