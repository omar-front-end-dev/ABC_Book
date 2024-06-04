import { useTheme } from "@emotion/react";
import { Box, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import "./ScrollUp.css";

export const ScrollUp = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      {scrollPosition > 400 && (
        <IconButton
          className="scroll-up"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "25px",
            right: "20px",
            zIndex: "999",
            width: "50px",
            height: "50px",
            bgcolor: theme.palette.mainColor.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            color: theme.palette.colorWhite.main,
            "&:hover": { bgcolor: theme.palette.mainColor.main },
          }}
        >
          <CallMergeIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      )}
    </Box>
  );
};
