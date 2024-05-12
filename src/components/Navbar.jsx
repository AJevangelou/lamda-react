import React, { useState} from 'react';
import { navLinks } from '../constants/navlinks';
import hamburger from '../assets/icons/hamburger.svg';
import lamda_logo from '../assets/images/lamda_logo.webp';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  



  return (
    <header className=' padding-x py-8 top-0 right-0 absolute z-10 w-full'>
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
