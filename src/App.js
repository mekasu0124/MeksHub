import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/authContext';

import GlobalStyle from './styles/globalStyles';

import Home from './pages/home';
import SignUp from './pages/auth/signup';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgot';
import Dashboard from './pages/dashboard/dashboard';
import AdminDashboard from './pages/admin/dashboard.js';
import ModifyApps from './pages/admin/apps/modifyApps.js';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/auth">
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot" element={<ForgotPassword />} />
          </Route>

          <Route path="/hub">
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="admin">
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="modify-apps" element={<ModifyApps />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
