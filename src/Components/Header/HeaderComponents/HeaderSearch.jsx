import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useGetData } from "../../../Hooks/useGetData";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  border: `1px solid ${theme.palette.secondTextColor.main}`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  zIndex: "11",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  color: theme.palette.mainColor.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "35ch",
    },
  },
}));

export const HeaderSearch = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useGetData(`books?category=${searchTerm}`);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setSearchTerm("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search By category…"
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={handleInputChange}
        />
        {searchTerm && (
          <Box
            sx={{
              position: "absolute",
              bgcolor: theme.palette.sectionBgColor.main,
              width: "100%",
              top: "40px",
              left: "0",
              borderRadius: "10px 10px 0px 0px",
              p: "10px",
              zIndex: "240",
              maxHeight: "380px",
              overflowY: "scroll",
            }}
          >
            {data?.data.length == 0 ? (
              <Box sx={{textAlign: "center", py: "20px"}}>
                <Typography component={"p"} sx={{fontSize: "20px", color: theme.palette.mainColor.main}}>
                  No result found
                </Typography>
              </Box>
            ) : (
              <Box>
                {data?.data?.map((book) => (
                  <Link
                    onClick={() => setSearchTerm("")}
                    key={book.id}
                    to={`/books/${book.id}`}
                  >
                    <Box
                      sx={{
                        mb: "10px",
                        border: `1px solid #ddd`,
                        p: "5px",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <Box sx={{ width: "70px" }}>
                        <img
                          style={{ width: "100%" }}
                          src={book.image}
                          alt=""
                        />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: theme.palette.secondTextColor.main,
                          }}
                        >
                          <strong>Title :</strong> {book.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: theme.palette.secondTextColor.main,
                          }}
                        >
                          <strong>Category :</strong> {book.category}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: theme.palette.secondTextColor.main,
                          }}
                        >
                          <strong>Price :</strong> {book.price}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Search>
    </Box>
  );
};
