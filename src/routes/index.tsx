import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/appLayout";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Contact from "../pages/contact";
import ContactDetail from "../pages/contact/ContactDetails";

// Define routes using createBrowserRouter
export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      {
        path: "contact",
        element: <Contact />,
        children:[

          { path: "contact/:id", element: <ContactDetail /> },
        ]
      },
    ],
  },
]);
