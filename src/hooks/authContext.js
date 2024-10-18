import { createContext, useContext, useState, useEffect } from 'react';

import api from './api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');

    if (loggedUserJSON) {
      setUser(JSON.parse(loggedUserJSON));
    }
  }, []);

  const login = async (postData) => {
    try {
      const response = await api.post('/hub/auth/login', postData);

      console.log(response);

      if (response.status === 200) {
        const { message, token, user } = response.data;

        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        window.localStorage.setItem('token', token);

        return message;
      }
    } catch (err) {
      console.error(err);
      return err.response.data.message;
    };
  };

  const logout = () => {
    window.localStorage.removeItem('loggedUser');
    window.localStorage.removeItem('token');

    setUser(null);
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
