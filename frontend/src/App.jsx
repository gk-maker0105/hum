import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Questions from "./pages/Questions";
import QuestionPage from "./pages/QuestionPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const noNavbarRoutes = ["/login", "/signup", "/"];

  const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/questions"
          element={
            <ProtectedRoute>
              <Questions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions/:id"
          element={
            <ProtectedRoute>
              <QuestionPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
