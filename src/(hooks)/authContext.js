import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  const loginAction = async (loginData, callback) => {
    await api.post("/users/login", loginData)
      .then(result => {
        setUser(result.data.user);
        setToken(result.data.token);

        localStorage.setItem("user_id", result.data.user.user_id);
        localStorage.setItem("token", result.data.token);
        return navigate("/dashboard");
      })
      .catch(err => {
        console.error(err);
        return callback("Authentication Failed");
      });
  };

  const logOutAction = async () => {
    setUser(null);
    setToken("");

    setTimeout(() => {
      return navigate('/');
    }, 500);
  };

  return <AuthContext.Provider value={{ token, user, loginAction, logOutAction }}>
          {children}
         </AuthContext.Provider>
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
