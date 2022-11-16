import store from "@/app/store";
import AdminPageLayout from "@/pages/AdminPageLayout";
import CustomerPageLayout from "@/pages/CustomerPageLayout";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PersistLogin from "@/pages/PersistLogin";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ProductDisplayDetailPage from "@/pages/ProductDisplayDetailPage";
import ProductDisplayPage from "@/pages/ProductDisplayPage";
import ProductListPage from "@/pages/ProductListPage";
import PublicPageLayout from "@/pages/PublicPageLayout";
import SignupPage from "@/pages/SignupPage";
import AppContainer from "@/shared/components/AppContainer";
import GlobalModal from "@/shared/components/GlobalModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./styles.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppContainer>
          <GlobalModal />
          <Routes>
            {/* public routes */}
            <Route element={<PersistLogin />}>
              <Route element={<PublicPageLayout />}>
                <Route index element={<ProductDisplayPage />} />
                <Route path="products-display/:productDisplayId" element={<ProductDisplayDetailPage />} />
                <Route path="register" element={<SignupPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>

              {/* customer routes */}
              <Route element={<CustomerPageLayout />}>
                <Route path="products" element={<ProductListPage />} />
                <Route path="products/:productId" element={<ProductDetailPage />} />
                {/* <Route path="cart" element={<CartPage />} /> */}
                {/* <Route path="orders" element={<OrderPage />} /> */}
                {/* <Route path="profile" element={<ProfilePage />} /> */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>

              {/* admin routes */}
              <Route path="admin" element={<AdminPageLayout />}>
                {/* <Route path="products" element={<AdminProductPage />} />
              <Route path="products/:productId" element={<AdminEditProductPage />} />
              <Route path="users" element={<AdminUserPage />} />
              <Route path="users/:userId" element={<AdminEditUserPage />} />
              <Route path="orders" element={<AdminOrderPage />} />
              <Route path="orders/:orderId" element={<AdminEditOrderPage />} />
              <Route path="carts" element={<AdminCartPage />} />
              <Route path="carts/:cartId" element={<AdminEditCartPage />} />
              <Route path="profile" element={<ProfilePage />} /> */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Route>

            {/* Not Found Page */}
          </Routes>
        </AppContainer>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
