import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-10 border-b-4 border-b-black ">
      <div className="flex flex-row items-center justify-start w-full ml-5">
        <Link to="/" className="font-inkfree text-xl text-fg italic hover:underline ml-2 mr-2">Home</Link>
        <Link to="/" className="font-inkfree text-xl text-fg italic hover:underline ml-2 mr-2">Browse</Link>
        <Link to="/auth/signup" className="font-inkfree text-xl text-fg italic hover:underline ml-2 mr-2">Sign Up</Link>
        <Link to="/auth/login" className="font-inkfree text-xl text-fg italic hover:underline ml-2 mr-2">Login</Link>
      </div>

      <div className="flex flex-row items-center justify-end w-full mr-5">
        <Link to="/" className="font-inkfree text-xl text-fg italic hover:underline ml-2 mr-2">About Us</Link>
        <Link to="/" className="font-inkfree text-xl text-fg italic hover:underline ml-2 mr-2">Support</Link>
      </div>
    </div>
  );
};
