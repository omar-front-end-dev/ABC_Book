import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import { NavigationBarLG } from "./NavigationBarComponents/NavigationBarLG";
import { NavigationBarSM } from "./NavigationBarComponents/NavigationBarSM";
import "./NavigationBar.css";
import { useEffect, useState } from "react";
import logo from "../../../public/images/Logo/logo.png.webp";
import { useGetData } from "../../Hooks/useGetData";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";


export const NavigationBar = () => {
  const { data } = useGetData("categories");
  const theme = useTheme();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const pageLinks = [
    {
      linkName: "my acount",
      linkTo: "/user-page",
      linkIcon: <PersonOutlineOutlinedIcon />,
    },
    {
      linkName: "cart page",
      linkTo: "/cart-page",
      linkIcon: <ShoppingCartOutlinedIcon />,
    },
    {
      linkName: "my favorite page",
      linkTo: "/wishlist",
      linkIcon: <FavoriteBorderIcon />,
    },
    {
      linkName: "Order list",
      linkTo: "/orders-page",
      linkIcon: <ChecklistRtlIcon />,
    },
  ];

  return (
    <Box
      className="nav"
      sx={{
        width: "100%",
        position: isSticky ? "fixed" : "relative",
        animationName: isSticky ? "top" : false,
        boxShadow: isSticky ? "0px 2px 15px #33333357" : false,
        top: "0",
        zIndex: "200",
      }}
    >
      <Box
        sx={{
          display: isSticky ? "block" : "none",
          textAlign: "center",
          py: "10px",
          bgcolor: theme.palette.colorWhite.main,
        }}
      >
        <Container maxWidth="lg">
          <img style={{ width: "150px" }} src={logo} alt="logo image" />
        </Container>
      </Box>
      <Box sx={{ py: "20px", bgcolor: theme.palette.sectionBgColor.main }}>
        <Container maxWidth="lg">
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavigationBarLG categories={data?.data} pageLinks={pageLinks} />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <NavigationBarSM categories={data?.data} pageLinks={pageLinks} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
