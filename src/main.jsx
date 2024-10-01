import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/login/Login.jsx";
import Register from "./components/pages/register/Register.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import Home from "./components/pages/user/home/Home.jsx";
import Deposit from "./components/pages/user/deposit/Deposit.jsx";
import Withdraw from "./components/pages/user/withdraw/Withdraw.jsx";
import UserTask from "./components/pages/user/task/UserTask.jsx";
import Transaction from "./components/pages/user/transaction/Transaction.jsx";
import Referral from "./components/pages/user/referral/Referral.jsx";
import Account from "./components/pages/user/account/Account.jsx";
import Package from "./components/pages/user/package/Package.jsx";
import Helpline from "./components/pages/user/helpline/Helpline.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/logIn",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/user/home",
        element: <Home />
      },
      {
        path: "/dashboard/user/deposit",
        element: <Deposit />
      },
      {
        path: "/dashboard/user/withdraw",
        element: <Withdraw />
      },
      {
        path: "/dashboard/user/task",
        element: <UserTask />
      },
      {
        path: "/dashboard/user/transaction",
        element: <Transaction />
      },
      {
        path: "/dashboard/user/referral",
        element: <Referral />
      },
      {
        path: "/dashboard/user/account",
        element: <Account />
      },
      {
        path: "/dashboard/user/package",
        element: <Package />
      },
      {
        path: "/dashboard/user/helpline",
        element: <Helpline />
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
