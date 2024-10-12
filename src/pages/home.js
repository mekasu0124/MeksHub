import { useEffect } from 'react';
import { useAuth } from '../(hooks)/authContext';
import { useNavigate, Link } from 'react-router-dom';


export default function Home() {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col items-center justify-start w-full h-[90vh]">
      <div className="flex flex-col items-center justify-center w-[60%] h-24 mt-3 tracking-widest">
        <h1 className="font-inkfree text-[#C6C6C6] text-3xl font-bold italic txtShadow2">
          Welcome To <span className="text-foreground font-normal">Mek&#39;s Hub!</span>
        </h1>

        <h3 className="font-inkfree text-[#C6C6C6] text-xl italic txtShadow2">
          A bunch of easy to use, free to abuse applications
        </h3>
      </div>

      <div className="flex flex-col items-center justify-evenly w-full h-full">
        <div className="flex flex-col items-center justify-center w-[70%] h-[400px] rounded-3xl border-2 border-foreground shadow-inner boxShadow">
          <p className="font-inkfree text-[#C6C6C6] text-2xl tracking-widest text-center w-[80%]">
            Mek&#39;s Hub is a platform that showcases all software developed
            by Mek &amp; Friends. All applications are connected to each other
            through your user profile. What does this mean? This means that once
            you create an account here, you won&#39;t need to create it again on
            each application you download. In addition to that, each software&#39;s
            data is securely stored and protected <span>by </span>
            <Link href="https://www.mongodb.com/" target="_blank" className="font-inkfree font-bold text-[#C6C6C6] text-xl hover:underline">MongoDB</Link>.
          </p>
          
          <p className="font-inkfree text-[#C6C6C6] text-base tracking-widest">
            For more information, please read <span>our </span>
            <Link to="" className="underline">User Agreement</Link>,
            <span> our </span> <Link href="" className="underline">Privacy Policy</Link>,
            <span> &amp; </span> our
            <Link to="" className="underline">Terms Of Service</Link>.
          </p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full">
          <Link to="" className="font-inkfree font-bold tracking-wider text-foreground text-2xl border-foreground border-2 w-[300px] rounded-full text-center p-3 hoverButton">Login</Link>
          <Link to="/sign-up" className="font-inkfree font-bold tracking-wider text-foreground text-2xl border-foreground border-2 w-[300px] rounded-full text-center p-3 hoverButton">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
