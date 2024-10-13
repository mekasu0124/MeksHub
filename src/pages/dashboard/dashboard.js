import { useEffect, useState } from "react";
import { useAuth } from "../../(hooks)/authContext"
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [username, setUsername] = useState('');

  const user = useAuth();
  const navigate = useNavigate('');

  useEffect(() => {
    if (!user.username) {
      return navigate('/');
    } else {
      setUsername(user.username);
    }
  }, [user, navigate]);

  return (
    <div className="text-white">Dashboard - {username}</div>
  )
};
