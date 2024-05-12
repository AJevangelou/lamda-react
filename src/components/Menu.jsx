import React, {useEffect, useRef} from "react";
import { navLinks } from '../constants/navlinks';
import { NavLink } from 'react-router-dom';
const Menu = ({ isOpen, closeMenu }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [closeMenu]);

    return (
        <div ref={menuRef} className={`absolute top-0 right-0 h-screen bg-gray-100 w-64 px-8 z-20 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        ${isOpen ? 'block ' : 'hidden'}`}>
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
export default Menu