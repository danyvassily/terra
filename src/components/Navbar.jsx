import { Link } from 'react-router-dom';
import terralogo from '../assets/terralogo.svg';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={terralogo} alt="Terra Logo" className="h-10 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
              Accueil
            </Link>
            <Link to="/produits" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
              Produits
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;