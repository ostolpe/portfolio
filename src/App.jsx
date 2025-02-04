import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  // {
  //   path: "/contact",
  //   element: <ContactPage />,
  // },
]);

function App() {
  return (
    <div className="app__container">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
