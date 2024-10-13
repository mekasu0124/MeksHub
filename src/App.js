import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import SignUp from './pages/(auth)/signup';
import Dashboard from './pages/dashboard/dashboard';

// import ValidateEmail from './pages/(auth)/validateEmail';
// import ValidatePhone from './pages/(auth)/validatePhone';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center bg-yellow-600 w-full text-black text-xl text-center font-bold italic underline font-inkfree">
        This app is under construction. All Items Are Due To Change At Any Time! Be Mindful Of The Updates!
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />

        {/* <Route path="/validate-email" element={<ValidateEmail />} /> */}
        {/* <Route path="/validate-phone" element={<ValidatePhone />} /> */}
      </Routes>
    </div>
  );
}

export default App;
