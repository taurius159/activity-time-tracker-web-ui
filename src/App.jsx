import "./Styles/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ActivityTimeTracker from "./Pages/ActivityTimeTracker";
import Navigation from "./Components/Navigation";
import ProtectedRoute from "./Components/ProtectedRoute";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ id: "1", name: "robin" });
  const handleLogout = () => {
    setUser(null);
    <Navigate to="/" replace />;
  };

  return (
    <>
      <Navigation user={user} handleLogout={handleLogout} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login user={user} setUser={setUser} />} />
        <Route path="register" element={<Register />} />
        <Route
          path="activityTimeTracker"
          element={
            <ProtectedRoute user={user}>
              <ActivityTimeTracker token={user} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>There is nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
