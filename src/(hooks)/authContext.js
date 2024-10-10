import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import api from './api';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    };
  }, [setUser]);

  const login = (userData) => {
    try {
      const response = api.post('/users/login', userData);

      if (response.data.user && response.data.token) {
        setUser(response.data.user);
        setToken(response.data.token);

        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);

        return router.push('/dashboard');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Failed to login');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
