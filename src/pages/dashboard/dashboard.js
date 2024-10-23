import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/authContext';
import { useState, useEffect } from 'react';


export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate('');

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-[50%] flex-shrink-0 mt-5">
          <h1 className="font-inkfree italic text-fg text-3xl tracking-widest">
            {currentUser ? currentUser.username : 'Loading...' }
          </h1>
        </div>

        <div className="flex flex-row justify-end items-center w-[50%]">
          {currentUser && currentUser.role === "admin" && (
            <button onClick={() => navigate('/hub/admin/dashboard')}
                    className="font-inkfree font-bold text-fg text-lg w-[150px] h-[40px] outline-none focus:outline-none hover:outline-none hover:underline tracking-widest">
              Admin
            </button>
          )}

          <button onClick={() => logout()} 
                  className="font-inkfree font-bold text-fg text-lg w-[150px] h-[40px] outline-none focus:outline-none hover:outline-none hover:underline tracking-widest">
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full flex-1 mt-5"></div>
    </div>
  );
};
