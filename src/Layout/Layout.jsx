import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../theme";
import { useEffect } from "react";

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
    <ThemeProvider theme={theme}>
      <Box component={"div"}>
        <Box component={"header"}>
          Header
        </Box>
        <Box component={"main"}>
          <Outlet />
        </Box>
        <Box component={"footer"}>
          Footer
        </Box>
      </Box>
    </ThemeProvider>
  );
};
