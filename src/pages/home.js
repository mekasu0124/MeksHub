import { useAuth } from "../hooks/authContext";
import { useNavigate } from "react-router-dom";

import Header from '../components/home/header';
import Main from '../components/home/main';
import Footer from '../components/home/footer';

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate('');

  if (!user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />

        <Main />

        <Footer />
      </div>
    )
  }

  return navigate('/hub/dashboard');
};
