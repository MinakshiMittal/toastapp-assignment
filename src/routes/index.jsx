import { Routes, Route, Navigate } from "react-router-dom";
import { Special } from "./Special";
import { Main } from "./Main";
import { PlaceOrder } from "./PlaceOrder";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/special" replace />} />
      <Route path="/special" element={<Special />} />
      <Route path="/main" element={<Main />} />
      <Route path="/place-order" element={<PlaceOrder />} />
    </Routes>
  );
};

export default MyRoutes;
