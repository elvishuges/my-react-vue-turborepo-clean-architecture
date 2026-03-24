import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeLogin } from "./../factories/pages/login-factory";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={makeLogin} />
      </Routes>
    </BrowserRouter>
  );
}
