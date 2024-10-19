import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/authContext';

import Title from '../../components/universal/title';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  const { logout } = useAuth();
  const navigate = useNavigate('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(loggedInUser);

    setUser(loggedInUser);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Title props={{ title: `${user.username}'s Dashboard` }} />

      <div className="flex flex-col items-center justify-center w-full flex-1 mt-5">
        <button onClick={() => logout()} className="w-20 h-20 bg-white">Logout</button>
      </div>
    </div>
  );
};
