import { useAuth } from "../hooks/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeContainer } from "../styles/pages/home.style";

import Header from "../components/home/header";
import Main from "../components/home/main";
import Footer from "../components/home/footer";

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate('');

  const [currentUser, setCurrentUuser] = useState(null);

  useEffect(() => {
    setCurrentUuser(user);
  }, [user]);

  if (currentUser && currentUser.isRemembered) {
    console.log(user.isRemembered);
    return navigate('/hub/dashboard');
  };

  if (!currentUser) {
    return (
      <HomeContainer>
        <Header />
        <Main />
        <Footer />
      </HomeContainer>
    )
  }
};
