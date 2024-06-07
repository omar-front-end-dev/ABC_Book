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
  Authentication,
  NotExistPage,
  ShoppingByCategory,
} from "./Pages/index";
import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { IsLoggedIn } from "./Components/index";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="authentication/:authType"
          element={
            <IsLoggedIn type="notIsAuth">
              <Authentication />
            </IsLoggedIn>
          }
        />
        <Route path="*" element={<NotExistPage />} />
        <Route
          path="/"
          element={
            <IsLoggedIn type="isAuth">
              <Layout />
            </IsLoggedIn>
          }
        >
          <Route index element={<Home />} />
          <Route path={`shopping`} element={<Shopping />} />
          <Route path="books/:booksId" element={<SingleProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart-page" element={<Cart />} />
          <Route path="orders-page" element={<Orders />} />
          <Route path="user-page" element={<UserAccountPage />} />
          <Route path="shopping-category/:category" element={<ShoppingByCategory />} />
        </Route>
      </>
    )
  );

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
