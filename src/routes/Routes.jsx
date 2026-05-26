import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadBooks from "../pages/ReadBooks/ReadBooks";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,

        Component: Home
      },
      {
        
        path: '/bookdetails/:id',
        loader: () => fetch('/booksData.json'),
        Component: BookDetails
      },
      {
        path: '/listed-books',
        loader: ()=> fetch('/booksData.json'),
        Component : ReadBooks
      },
      {
        path:'/about',
        Component: About
      }

    ]
  },

  {
    path: '/signin',
    Component: Signin
  },
  {
    path: '/signup',
    Component: Signup
  }
]);