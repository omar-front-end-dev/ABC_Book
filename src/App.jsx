import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./Layout/Layout";


import {
  Home,
  Shopping,
  SingleProduct,
  Authentication,
  Cart,
  Wishlist,
} from "./Pages/index";
import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";

function App() {
  // const { isAuth, userId } = useSelector((state) => state.authReducer);
  // const { cartItems } = useSelector((state) => state.cartReducer);
  // const { favoriteItems } = useSelector((state) => state.favoriteReducer);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isAuth) dispatch(getCartData(userId));
  //   dispatch(getFavoriteData(userId));
  // }, [dispatch, isAuth, userId]);

  // useEffect(() => {
  //   if (userId && cartItems.length) {
  //     dispatch(updateCartData({ id: userId, cart: cartItems }));
  //   }
  // }, [dispatch, userId, cartItems]);

  // useEffect(() => {
  //   if (userId && favoriteItems.length) {
  //     dispatch(updateFavoriteData({ id: userId, favorites: favoriteItems }));
  //   }
  // }, [dispatch, userId, favoriteItems, cartItems]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={`shopping/:shoppingType`} element={<Shopping />} />
        <Route
          path="/:gender/:category/products/:productId"
          element={<SingleProduct />}
        />
        <Route path="Wishlist" element={<Wishlist />} />
        <Route
          path="account/:authenticationType"
          element={<Authentication />}
        />
        <Route path="cart-page" element={<Cart />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Box
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        <Toaster position="top-center" />
      </Box>
    </>
  );
}

export default App;
