import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AdminCartPage } from "../pages/AdminCartPage";
import { AdminEditCartPage } from "../pages/AdminEditCartPage";
import { AdminEditOrderPage } from "../pages/AdminEditOrderPage";
import { AdminEditProductPage } from "../pages/AdminEditProductPage";
import { AdminEditUserPage } from "../pages/AdminEditUserPage";
import { AdminLayout } from "../pages/AdminLayout";
import { AdminOrderPage } from "../pages/AdminOrderPage";
import { AdminProductPage } from "../pages/AdminProductPage";
import { AdminUserPage } from "../pages/AdminUserPage";
import { CartPage } from "../pages/CartPage";
import { CustomerLayout } from "../pages/CustomerLayout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { OrderPage } from "../pages/OrderPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ProfilePage } from "../pages/ProfilePage";
import { SignupPage } from "../pages/SignupPage";
import { store } from "./store";
import "./styles/index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes>
          {/* public routes */}
          <Route index element={<HomePage />} />
          <Route path="products/:productId" element={<ProductDetailPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />

          {/* customer routes */}
          <Route element={<CustomerLayout />}>
            <Route path="cart" element={<CartPage />} />
            <Route path="orders" element={<OrderPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          {/* admin routes */}
          <Route path="admin" element={<AdminLayout />}>
            <Route path="products" element={<AdminProductPage />} />
            <Route path="products/:productId" element={<AdminEditProductPage />} />
            <Route path="users" element={<AdminUserPage />} />
            <Route path="users/:userId" element={<AdminEditUserPage />} />
            <Route path="orders" element={<AdminOrderPage />} />
            <Route path="orders/:orderId" element={<AdminEditOrderPage />} />
            <Route path="carts" element={<AdminCartPage />} />
            <Route path="carts/:cartId" element={<AdminEditCartPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
