import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "../Components/ProductDetails";
import SignIn from "../Components/Login_SignUp/SignIn";
import SignUp from "../Components/Login_SignUp/SignUp";
import Home from "../Components/Home";
import { Destinations } from "../Components/Destinations";
import Payment from "../Components/Payment/Payment";
import Success from "../Components/Payment/Success";
import { PrivateRoute } from "./PrivateRoute";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/destination"
        element={
          <PrivateRoute>
            <Destinations />
          </PrivateRoute>
        }
      />
      <Route path="/destination/:id" element={<ProductDetails />} />
      <Route
        path="/payment/:id"
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }
      />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};
