import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//react icons
import { FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark } from 'react-icons/fa6';
import Modal from './Modal';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Nav Items
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/blogs", link: "Blogs" },
        { path: "/about", link: "About" },
        { path: "/services", link: "Services" },
        { path: "/contact", link: "Contact" },
    ];

    // Modal for login
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>KM</span></a>

                {/* Nav items for lg devices */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {navItems.map(({ path, link }) =>
                        <li key={path} className='text-white'>
                            <NavLink className={({ isActive, isPending }) =>
                                isActive
                                    ? "text-orange-500 underline underline-offset-4"
                                    : isPending
                                    ? "pending"
                                    : ""
                            } to={path}>{link}</NavLink>
                        </li>
                    )}
                </ul>

                {/* Menu icons and Log In button for large screens */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
                    <a href="/" className='hover:text-orange-500'><FaDribbble /></a>
                    <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
                    <button
                        onClick={openModal}
                        className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all ease-in-out duration-300'>
                        Log In
                    </button>
                </div>

                {/* Modal component */}
                <Modal isOpen={isModalOpen} onClose={closeModal} />

                {/* Mobile menu button */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
                    </button>
                </div>
            </nav>

            {/* Menu items for mobile */}
            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 right-0 w-full transition-all ease-in-out duration-300" : "hidden"}`}>
                    {navItems.map(({ path, link }) =>
                        <li key={path} className='text-black'>
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>
                    )}
                    {/* Log In button for mobile screens */}
                    <li className='text-center'>
                        <button
                            onClick={() => {
                                openModal();
                                toggleMenu();
                            }}
                            className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-black hover:text-orange-500 transition-all ease-in-out duration-300'>
                            Log In
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default NavBar;
