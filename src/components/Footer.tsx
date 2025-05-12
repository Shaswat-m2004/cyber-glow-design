import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CircuitBoard, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-neon-cyan/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <CircuitBoard className="text-neon-cyan h-8 w-8" />
              <span className="font-orbitron text-xl font-bold tracking-wider">
                REBORN<span className="text-neon-red">.</span>
              </span>
            </Link>
            <p className="text-gray-400">
              Pioneering the future of digital design with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Digital Innovation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Tech Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-orbitron text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-neon-cyan shrink-0 mt-1" />
                <span className="text-gray-400">Neo Tokyo, Sector 7, Digital District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-neon-cyan shrink-0" />
                <span className="text-gray-400">+1 (888) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-neon-cyan shrink-0" />
                <span className="text-gray-400">info@reborndesign.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} REBORN DESIGN. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-neon-cyan mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-neon-cyan">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
