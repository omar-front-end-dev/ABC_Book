import {
  Box,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAuthorizedGetData } from "../../Hooks/useAuthorizedGetData";
import { IfIsEmpty, IsLoading, WishlistList } from "../../Components";
import { useTheme } from "@emotion/react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export const Wishlist = () => {
  const { data, isLoading } = useAuthorizedGetData("wishlist/get");
  const theme = useTheme();

  return (
    <Box>
      <Container maxWidth="lg">
        <Box>
          {data?.data.length == 0 ? (
            <IfIsEmpty
              icon={
                <FavoriteBorderOutlinedIcon sx={{ fontSize: "50px" }} />
              }
              text={"Wishlist list is empty"}
            />
          ) : (
            <>
              {isLoading ? (
                <IsLoading />
              ) : (
                <Box sx={{ py: theme.palette.sectionPaddingY.main }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      mb: "20px",
                      color: theme.palette.secondTextColor.main,
                    }}
                  >
                    <Typography sx={{ fontSize: "30px" }}>
                      Wishlist Page
                    </Typography>
                    <BookmarkBorderIcon sx={{ fontSize: "30px" }} />
                  </Box>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              color: theme.palette.mainColor.main,
                              fontSize: "16px",
                              minWidth: "160px",
                            }}
                            align="center"
                          >
                            Book Image
                          </TableCell>
                          <TableCell
                            sx={{
                              color: theme.palette.mainColor.main,
                              fontSize: "16px",
                              minWidth: "160px",
                            }}
                            align="center"
                          >
                            Book Title
                          </TableCell>
                          <TableCell
                            sx={{
                              color: theme.palette.mainColor.main,
                              fontSize: "16px",
                              minWidth: "160px",
                            }}
                            align="center"
                          >
                            Book category
                          </TableCell>
                          <TableCell
                            sx={{
                              color: theme.palette.mainColor.main,
                              fontSize: "16px",
                              minWidth: "160px",
                            }}
                            align="center"
                          >
                            Book Description
                          </TableCell>
                          <TableCell
                            sx={{
                              color: theme.palette.mainColor.main,
                              fontSize: "16px",
                              minWidth: "160px",
                            }}
                            align="center"
                          >
                            Book Price
                          </TableCell>
                          <TableCell
                            sx={{
                              color: theme.palette.mainColor.main,
                              fontSize: "16px",
                              minWidth: "160px",
                            }}
                            align="center"
                          >
                            Show book
                          </TableCell>
                          <TableCell
                            sx={{
                              color: theme.palette.mainColor.main,
                              fontSize: "16px",
                              minWidth: "160px",
                            }}
                            align="center"
                          >
                            Remove
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <WishlistList wishlistList={data.data} />
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};
