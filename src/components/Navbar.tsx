
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircuitBoard, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen
          ? 'bg-cyber-dark/90 backdrop-blur-md border-b border-neon-cyan/30'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <CircuitBoard className="text-neon-cyan h-8 w-8 group-hover:animate-spin-slow" />
          <span className="font-orbitron text-xl font-bold tracking-wider group-hover:neon-text-cyan">
            REBORN<span className="text-neon-red">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-rajdhani text-base font-semibold tracking-wider transition duration-300 hover:text-neon-cyan ${location.pathname === link.path ? 'text-neon-cyan' : 'text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="cyber-button text-white"
          >
            Connect
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-neon-red" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-cyber-darker/95 backdrop-blur-md z-40 flex flex-col items-center overflow-y-auto min-h-screen py-12 px-6">
          <nav className="flex flex-col items-center space-y-6 w-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-orbitron text-xl font-medium tracking-wider transition duration-300 hover:text-neon-cyan ${location.pathname === link.path ? 'text-neon-cyan' : 'text-white'
                  }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="cyber-button text-white mt-4"
              onClick={closeMenu}
            >
              Connect
            </Link>
          </nav>
        </div>
      )}

    </header>
  );
};

export default Navbar;
