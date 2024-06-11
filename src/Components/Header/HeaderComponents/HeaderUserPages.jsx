import { Badge, Box, Button, Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../RTK/slices/authSlice";
import { useAuthorizedGetData } from "../../../Hooks/useAuthorizedGetData";
import { useEffect } from "react";

export const HeaderUserPages = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { data: cartData, refetch: refetchCartData } =
    useAuthorizedGetData("cart");
  const { data: wishlistData, refetch: refetchWishlist } =
    useAuthorizedGetData("wishlist/count");
  const { data: order, refetch: refetchOrderData } =
    useAuthorizedGetData(`orders`);

  useEffect(() => {
    if (
      cartData?.data.length ||
      wishlistData?.data.count ||
      order?.data.length
    ) {
      refetchCartData();
      refetchOrderData();
      refetchWishlist();
    }
  }, [
    refetchOrderData,
    refetchCartData,
    refetchWishlist,
    wishlistData,
    cartData?.data.length,
    order?.data.length,
  ]);

  return (
    <Box className="header-user-pages">
      <ul
        className="header-user-pages__list"
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <li>
          <Badge color="error" badgeContent={order?.data.length}>
            <Link
              className="header-user-pages__link"
              to={"/orders-page/order-page"}
              style={{
                display: "flex",
                color: theme.palette.secondTextColor.main,
                transition: ".2s",
              }}
            >
              <Tooltip title="Order List" placement="top">
                <ChecklistRtlIcon sx={{ fontSize: "30px" }} />
              </Tooltip>
            </Link>
          </Badge>
        </li>
        <li>
          <Link
            className="header-user-pages__link"
            to={"/user-page/user-info"}
            style={{
              display: "flex",
              color: theme.palette.secondTextColor.main,
              transition: ".2s",
            }}
          >
            <PersonOutlineOutlinedIcon sx={{ fontSize: "30px" }} />
          </Link>
        </li>
        <li>
          <Badge color="error" badgeContent={wishlistData?.data.count}>
            <Link
              className="header-user-pages__link"
              style={{
                display: "flex",
                color: theme.palette.secondTextColor.main,
                transition: ".2s",
              }}
              to={"/wishlist"}
            >
              <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
            </Link>
          </Badge>
        </li>
        <li>
          <Badge color="error" badgeContent={cartData?.data.length}>
            <Link
              className="header-user-pages__link"
              to={"/cart-page"}
              style={{
                display: "flex",
                color: theme.palette.secondTextColor.main,
                transition: ".2s",
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
            </Link>
          </Badge>
        </li>
        <li>
          <Button
            onClick={() => dispatch(logout())}
            className="main-hover-button"
            sx={{
              display: "flex",
              p: { xs: "5px 15px", lg: "8px 25px" },
              bgcolor: theme.palette.mainColor.main,
              color: theme.palette.colorWhite.main,
              borderRadius: "30px",
              position: "relative",
              overflow: "hidden",
              "&:hover": { bgcolor: theme.palette.mainColor.main },
              fontSize: { xs: "11px", md: "13px" },
            }}
          >
            Log out
          </Button>
        </li>
      </ul>
    </Box>
  );
};
