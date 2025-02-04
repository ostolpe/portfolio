import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
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
