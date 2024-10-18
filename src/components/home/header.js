import TitleBar from './header-components/titleBar';
import NavBar from './header-components/navBar';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full flex-shrink-0 bg-bg2 rounded">
      <TitleBar />

      <NavBar />
    </header>
  );
};
