import Layout from "./layout/AppHeader";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import LoginForm from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ProfileDataContext } from "@/context/ProfileContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />

          <Route path="/" element={<LoginForm />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profilePage" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
