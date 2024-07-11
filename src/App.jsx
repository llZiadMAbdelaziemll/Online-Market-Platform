import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";

import AppLayout from "./application/ui/AppLayout";
import Login from "./application/pages/Login";
import Register from "./application/pages/Register";
import Home from "./application/pages/Home";
import Shop from "./application/pages/Shop";
import ContactUs from "./application/pages/ContactUs";
import AboutUs from "./application/pages/AboutUs";
import Policy from "./application/pages/Policy";
import Cart from "./application/pages/Cart";
import WishList from "./application/pages/WishList";
import Account from "./application/pages/Account";
import DAppLayout from "./dashboard/ui/DAppLayout";
import Dashboard from "./dashboard/pages/Dashboard";
import DProducts from "./dashboard/pages/DProducts";
import AddProduct from "./dashboard/pages/AddProduct";
import AddCategory from "./dashboard/pages/AddCategory";
import AddSubCategory from "./dashboard/pages/AddSubCategory";
import { DarkModeProvider } from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./application/pages/Product";
import ProtectedRoute from "./application/ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  // const navigate = useNavigate();
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="home" />} />

              <Route path="home" element={<Home />} />
              <Route path="home/:productId" element={<Product />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:productId" element={<Product />} />
              {/* <Route path="shop/:productId" element={<Product />} /> */}
              {/* <Route path="shop/:productId/:productId" element={<Product />} /> */}
              {/* <Route
                path="shop/:productId/:productId/:productId"
                element={<Product />}
              />
              <Route
                path="shop/:productId/:productId/:productId/:productId"
                element={<Product />}
              />
              <Route
                path="shop/:productId/:productId/:productId/:productId/:productId"
                element={<Product />}
              /> */}
              <Route path="account" element={<Account />} />
              <Route path="cart" element={<Cart />} />
              <Route path="wishlist" element={<WishList />} />
              {/* <Route path="wishlist/:productId" element={<Product />} /> */}

              <Route path="aboutus" element={<AboutUs />} />
              <Route path="contactus" element={<ContactUs />} />
              <Route path="policy" element={<Policy />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route element={<DAppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />

              <Route path="dashboardproducts" element={<DProducts />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="addcategory" element={<AddCategory />} />
              <Route path="addsubcategory" element={<AddSubCategory />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
