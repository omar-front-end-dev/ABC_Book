import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { Header, Footer, ScrollUp, NavigationBar } from "../Components/index";

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

  return (
    <>
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
    </>
  );
};
