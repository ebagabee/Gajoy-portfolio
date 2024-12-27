import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Defina as props que o Header espera receber
interface HeaderProps {
  toggleLanguage: () => void;
  currentLanguage: string;
}

const Header: React.FC<HeaderProps> = ({ toggleLanguage, currentLanguage }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getHomeLink = (anchor: string) => {
    return location.pathname === '/' ? `#${anchor}` : `/#${anchor}`;
  };

  const navItems = [
    { name: t('nav.home'), link: '/' },
    { name: t('nav.about'), link: getHomeLink('about') },
    { name: t('nav.projects'), link: getHomeLink('projects') },
    { name: t('nav.contact'), link: getHomeLink('contact') },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            {t('site.name')}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-gray-600 hover:text-primary transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <button onClick={toggleLanguage} className="ml-4">
            {currentLanguage === 'en' ? '🇺🇸' : '🇧🇷'}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="block py-2 text-gray-600 hover:text-primary transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
