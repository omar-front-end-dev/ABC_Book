import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export const IfIsEmpty = ({ icon, text }) => {
  const theme = useTheme();
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
                color: theme.palette.mainColor.main
              }}
            >
              {icon}
            </Typography>
            <Typography
              component={"h2"}
              sx={{
                fontSize: {xs: "20px", sm: "30px"},
                textTransform: "capitalize",
                color: theme.palette.secondTextColor.main,
                fontWeight: "bold"
              }}
            >
              {text}
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
