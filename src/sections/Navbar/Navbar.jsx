import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from '../../../public/logo/PulseLogo.png';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fullNavbar ${scrolled ? "scrolled" : ""}`}>
      {/* Existing desktop layout */}
      <div className="navbarLeft">
        <a href="#home"><p>Home</p></a>
        <a href="#gallery"><p>Pulse Colors</p></a>
      </div>
      <div className="navbarMiddle">
        <img src={Logo} className='logo' />
      </div>
      <div className="navbarRight">
        <a href="#customize"><p>Customize & Shop</p></a>
        <a href="#contact"><p>Contact</p></a>
      </div>

      {/* Mobile view */}
      <div className="mobileNavbar">
        <img src={Logo} className="mobileLogo" />
        <div className="mobileMenuIcon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={26} color="white" /> : <FiMenu size={26} color="white" />}
        </div>
      </div>

      {menuOpen && (
        <div className="mobileMenuList">
          <a href="#home" onClick={() => setMenuOpen(false)}><p>Home</p></a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}><p>Pulse Colors</p></a>
          <a href="#customize" onClick={() => setMenuOpen(false)}><p>Customize & Shop</p></a>
          <a href="#contact" onClick={() => setMenuOpen(false)}><p>Contact</p></a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
