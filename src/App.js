import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import SignUp from './pages/(auth)/signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
