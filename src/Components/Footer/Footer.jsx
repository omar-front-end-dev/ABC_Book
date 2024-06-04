import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import logo from "../../../public/images/Logo/logo.png.webp";
import { useTheme } from "@emotion/react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: theme.palette.sectionPaddingY.main,
        bgcolor: theme.palette.sectionBgColor.main,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <img src={logo} alt="logo image" />
              <Typography
                sx={{
                  my: "20px",
                  lineHeight: "1.7",
                  color: theme.palette.secondTextColor.main,
                }}
                component={"p"}
              >
                {`Get the breathing space now, and we'll extend your term at the
                other end year for go.`}
              </Typography>
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <li>
                  <IconButton
                    className="social-icon"
                    sx={{ border: "1px solid #ddd", p: "10px" }}
                  >
                    <FacebookOutlinedIcon sx={{ fontSize: "17px" }} />
                  </IconButton>
                </li>
                <li>
                  <IconButton
                    className="social-icon"
                    sx={{ border: "1px solid #ddd", p: "10px" }}
                  >
                    <InstagramIcon sx={{ fontSize: "17px" }} />
                  </IconButton>
                </li>
                <li>
                  <IconButton
                    className="social-icon"
                    sx={{ border: "1px solid #ddd", p: "10px" }}
                  >
                    <LinkedInIcon sx={{ fontSize: "17px" }} />
                  </IconButton>
                </li>
                <li>
                  <IconButton
                    className="social-icon"
                    sx={{ border: "1px solid #ddd", p: "10px" }}
                  >
                    <YouTubeIcon sx={{ fontSize: "17px" }} />
                  </IconButton>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component={"h6"}
                sx={{
                  color: theme.palette.secondTextColor.main,
                  fontWeight: "bold",
                  fontSize: "17px",
                  mb: "20px"
                }}
              >
                Book Category
              </Typography>
              <ul>
                <li>
                  <Link to={"/"} className="footer__link">
                    History
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Horror - Thriller
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Love Stories
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Science Fiction
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Business
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                mt: {xs: "20px", lg: "50px"},
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ul>
                <li>
                  <Link to={"/"} className="footer__link">
                    History
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Horror - Thriller
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Love Stories
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Science Fiction
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Business
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{display :"flex", flexDirection: "column", alignItems: "center"}}>
              <Typography
                component={"h6"}
                sx={{
                  color: theme.palette.secondTextColor.main,
                  fontWeight: "bold",
                  fontSize: "17px",
                }}
              >
                Book Category
              </Typography>
              <ul style={{ marginTop: "35px" }}>
                <li>
                  <Link to={"/"} className="footer__link">
                    History
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Horror - Thriller
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Love Stories
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Science Fiction
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="footer__link">
                    Business
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
