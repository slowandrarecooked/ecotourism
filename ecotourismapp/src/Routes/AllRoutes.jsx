import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "../Components/ProductDetails";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};
