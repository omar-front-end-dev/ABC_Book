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
  Cart,
  Wishlist,
  Orders,
  UserAccountPage,
  NotExistPage,
  ShoppingByCategory,
} from "./Pages/index";
import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<NotExistPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`shopping`} element={<Shopping />} />
          <Route path="books/:booksId" element={<SingleProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart-page" element={<Cart />} />
          <Route path="orders-page/:orderPage" element={<Orders />} />
          <Route path="user-account/:typeAuth" element={<UserAccountPage />} />
          <Route
            path="shopping-category/:category"
            element={<ShoppingByCategory />}
          />
        </Route>
      </>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Box
        sx={{
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        <Toaster position="top-center" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
