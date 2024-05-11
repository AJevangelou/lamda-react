import React, { useState, useEffect, useRef } from 'react';
import { navLinks } from '../constants/navlinks';
import hamburger from '../assets/icons/hamburger.svg';
import lamda_logo from '../assets/images/lamda_logo.webp';
import { NavLink } from 'react-router-dom';

const Menu = ({ isOpen, closeMenu }) => {
    const menuRef = useRef(null);
    useEffect( () => {
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                closeMenu()
            }
        }
        document.addEventListener('mousedown', handler)
      }), [closeMenu]

  return (
    <div ref={menuRef} className={`absolute top-0 right-0 h-screen bg-white w-64 p-8 z-20 ${isOpen ? 'block' : 'hidden'}`}>
      <ul>
        {navLinks.map((item) => (
          <li key={item.label}>
            <NavLink to={item.href} className='block my-2 text-lg text-gray-800 hover:text-yellow-400' onClick={closeMenu}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  



  return (
    <header className='xl:left-[1.5%] padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={lamda_logo} alt='Logo' className='max-md:w-[61px] max-md:h-[24px] md:w-[123px] md:h-[49px]' />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              {item.label === 'About Us' ? <a href={item.href} className='font-medium leading-normal text-lg text-white hover:text-yellow-400'>{item.label}</a> :
                <NavLink to={item.href} className='font-medium leading-normal text-lg text-white hover:text-yellow-400'>{item.label}</NavLink>
              }
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block cursor-pointer'>
          <img src={hamburger} alt='Hamburger' width={25} height={25} onClick={toggleMenu} />
        </div>
        <Menu isOpen={isOpen} closeMenu={closeMenu} />
      </nav>
    </header>
  );
}

export default Navbar;
