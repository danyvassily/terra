import { Link } from 'react-router-dom';
import terraLogo from '../assets/Terrat.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <img src={terraLogo} alt="Terra Logo" className="h-10 mb-4" />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="/src/assets/icons8-x-50.png" alt="X" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="/src/assets/icons8-facebook-50.png" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="/src/assets/icons8-instagram-50.png" alt="Instagram" className="w-5 h-5" />
              </a>
            </div>
          </div>

      
  

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">2 rue Kleber, 75016 Paris</li>
              <li className="text-gray-400">01 43 07 76 76</li>
              <li>
                <a href="mailto:TeraFranceshop@market.com" className="text-gray-400 hover:text-white transition-colors">
                  TeraFranceshop@market.com
                </a>
              </li>
            </ul>
          </div>

          {/* Stores */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Nos Magasins</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Paris • St-Brieuc • Lyon • Toulouse</li>
              <li className="text-gray-400"> Londres • New York • Tel Aviv</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p className="text-gray-400">
            © 2024 Terra France. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 