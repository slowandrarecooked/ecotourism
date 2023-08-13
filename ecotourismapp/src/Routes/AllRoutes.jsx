import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "../Components/ProductDetails";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/productDetails" element={<ProductDetails />} />
    </Routes>
  );
};
