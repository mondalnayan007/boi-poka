import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
        {
           index:true,
           
           Component : Home
        }
    ]
  },
  {
    path : '/signin',
    Component : Signin
  },
  {
    path : '/signup',
    Component : Signup
  }
]);