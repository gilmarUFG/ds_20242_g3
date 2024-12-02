import { NavBar } from './NavBar';
import { Outlet } from 'react-router';
import { GlobalStyle } from '../../styles/global';

function Layout() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
