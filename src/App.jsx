import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";
import React from "react";
import { useSelector } from "react-redux";

const Welcome = React.lazy(() =>
  import("./components/pages/welcome/welcome.component")
);
const SellingTents = React.lazy(() =>
  import("./components/pages/selling-tents/selling-tents.component")
);
const SellingTentsProduct = React.lazy(() =>
  import(
    "./components/pages/selling-tents/tents-product/selling-tents-product.component"
  )
);
const RentTents = React.lazy(() =>
  import("./components/pages/rent-tents/rent-tents.component")
);
const Payment = React.lazy(() =>
  import("./components/pages/payment/payment.component")
);
const ManageUsers = React.lazy(() =>
  import("./components/pages/manage/manage-users/manage-users.component")
);

const ManageProducts = React.lazy(() =>
  import("./components/pages/manage/manage-products/manage-products.component")
);

const ManageProductRent = React.lazy(() =>
  import(
    "./components/pages/manage/manage-product-rent/manage-product-rent.component"
  )
);

function App() {
  const { user } = useSelector((state) => state.auth);
  const ADMIN = "610064006d0069006e00"; //admin UTF-16
  // const USER = "7500730065007200"; // user UTF-16
  return (
    <div className="root">
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              {" "}
              <Welcome />{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/selling-tents"
          element={
            <React.Suspense fallback="Loading...">
              {" "}
              <SellingTents />{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/selling-tents-product/:id"
          element={
            <React.Suspense fallback="Loading...">
              {" "}
              <SellingTentsProduct />{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/rent-tents"
          element={
            <React.Suspense fallback="Loading...">
              {" "}
              <RentTents />{" "}
            </React.Suspense>
          }
        />
        <Route
          path="/payment"
          element={
            <React.Suspense fallback="Loading...">
              {" "}
              <Payment />{" "}
            </React.Suspense>
          }
        />
        {user?.role === ADMIN && (
          <>
            <Route
              path="/manage-users"
              element={
                <React.Suspense fallback="Loading...">
                  {" "}
                  <ManageUsers />{" "}
                </React.Suspense>
              }
            />

            <Route
              path="/manage-products"
              element={
                <React.Suspense fallback="Loading...">
                  {" "}
                  <ManageProducts />{" "}
                </React.Suspense>
              }
            />

            <Route
              path="/manage-product-rent"
              element={
                <React.Suspense fallback="Loading...">
                  {" "}
                  <ManageProductRent />{" "}
                </React.Suspense>
              }
            />
          </>
        )}

        <Route
          path="*"
          element={
            <React.Suspense fallback="Loading...">
              {" "}
              <Navigate to="/" />{" "}
            </React.Suspense>
          }
        />
      </Routes>
      <div className="footer-margin"></div>
      <FooterComponent />
    </div>
  );
}

export default App;
