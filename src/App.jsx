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
const TestComponent = React.lazy(() =>
  import("./components/pages/test-component/test.component")
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

function App() {
  const { user } = useSelector((state) => state.auth);
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
          path="test"
          element={
            <React.Suspense fallback="Loading...">
              {" "}
              <TestComponent />{" "}
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
        {!user ? null : (
          <Route
            path="/manage-users"
            element={
              <React.Suspense fallback="Loading...">
                {" "}
                <RentTents />{" "}
              </React.Suspense>
            }
          />
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
      <FooterComponent />
    </div>
  );
}

export default App;
