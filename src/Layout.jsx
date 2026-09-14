import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Layout() {
  return (
    <>
      <Navbar />
      <div className="page-shell">
        <div className="page-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
