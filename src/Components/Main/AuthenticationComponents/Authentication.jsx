import { Box, Typography } from "@mui/material";
import { Register } from "./Register";
import logo from "../../../../public/images/Logo/logo.png.webp";
import { useTheme } from "@emotion/react";
import { useLocation } from "react-router-dom";
import { Login } from "./Login";

export const Authentication = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: "20px",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "62%" },
            p: { xs: "10px 10px", md: "15px 30px" },
            boxShadow: " 0px 0px 14px -3px #00000054",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box className="auth__logo" sx={{ pb: "5px" }}>
              <img src={logo} alt="logo image" />
            </Box>
            <Typography
              component={"h2"}
              sx={{
                color: theme.palette.secondTextColor.main,
                fontSize: "30px",
                fontWeight: "bold",
                mb: "10px",
              }}
            >
              {pathname == "/user-account//register" ? "Sign Up" : "login"}
            </Typography>
            <Typography
              component={"p"}
              sx={{
                color: theme.palette.secondTextColor.main,
                fontSize: "15px",
                mb: "10px",
              }}
            >
              {pathname == "/authentication/register"
                ? "Create your account to get full access"
                : "Enter Login details to get access"}
            </Typography>
          </Box>
          {pathname == "/user-account/register" ? <Register /> : <Login />}
        </Box>
      </Box>
    </Box>
  );
};
