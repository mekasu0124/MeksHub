import { createContext, useContext, useState, useEffect } from 'react';

import api from './api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const navigate = useNavigate('');

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    console.log(loggedUserJSON);

    if (loggedUserJSON) {
      setUser(JSON.parse(loggedUserJSON));
    }
  }, []);

  const login = async (postData) => {
    try {
      const response = await api.post('/hub/auth/login', postData);

      if (response.status === 200) {
        const { message, token, user } = response.data;

        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        window.localStorage.setItem('token', token);

        setUser(user);
        setToken(token);

        return {
          status: 200,
          message: message,
        };
      }
    } catch (err) {
      return {
        status: err.status,
        message: err.response.data.message
      };
    };
  };

  const logout = () => {
    window.localStorage.removeItem('loggedUser');
    window.localStorage.removeItem('token');

    setUser(null);
    setToken('');

    setTimeout(() => {
      return navigate('/auth/login');
    }, 1000);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
