import { useAuth } from "../hooks/authContext";
import { useNavigate } from "react-router-dom";

import Header from '../components/home/header';
import Main from '../components/home/main';
import Footer from '../components/home/footer';
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate('');

  const [currentUser, setCurrentUuser] = useState(null);

  useEffect(() => {
    setCurrentUuser(user);
  }, [user]);

  if (!currentUser) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />

        <Main />

        <Footer />
      </div>
    )
  }

  if (user.isRemembered) {
    console.log(user.isRemembered);
    return navigate('/hub/dashboard');
  };
};
