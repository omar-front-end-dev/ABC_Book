import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const IfIsEmpty = ({ icon, text }) => {
  const theme = useTheme();
  const { isAuth } = useSelector((state) => state.authReducer);

  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Typography
              component={"h2"}
              sx={{
                width: "150px",
                height: "150px",
                bgcolor: theme.palette.sectionBgColor.main,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: theme.palette.mainColor.main,
              }}
            >
              {icon}
            </Typography>
            <Typography
              component={"h2"}
              sx={{
                fontSize: { xs: "20px", sm: "30px" },
                textTransform: "capitalize",
                color: theme.palette.secondTextColor.main,
                fontWeight: "bold",
              }}
            >
              {text}
            </Typography>
            <Typography
              component={"p"}
              sx={{
                color: theme.palette.secondTextColor.main,
                fontSize: "16px",
                fontWeight: "bold",
                display: !isAuth ? "block" : "none",
              }}
            >
              Please create an{" "}
              <Link
                to={"/user-account/register"}
                style={{
                  color: theme.palette.mainColor.main,
                  textDecoration: "underline",
                }}
              >
                account
              </Link>{" "}
              or{" "}
              <Link
                to={"/user-account/login"}
                style={{
                  color: theme.palette.mainColor.main,
                  textDecoration: "underline",
                }}
              >
                login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

IfIsEmpty.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
};
