import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-r from-[#00cea8]/30 via-[#7d52c4]/25 to-[#bf61ff]/30 shadow-sm backdrop-blur-sm" 
          : "bg-transparent backdrop-blur-sm bg-opacity-5"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Even lighter gradient glow around logo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00cea8]/40 to-[#bf61ff]/40 blur-sm opacity-30"></div>
            <img src={logo} alt='logo' className='w-9 h-9 object-contain relative z-10' />
          </div>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            <span className='sm:block hidden'>
              <span className="bg-gradient-to-r from-[#00cea8]/90 to-[#bf61ff]/90 bg-clip-text text-transparent">
                Tejas Pawar
              </span>
            </span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title 
                  ? "bg-gradient-to-r from-[#00cea8]/90 to-[#bf61ff]/90 bg-clip-text text-transparent border-b border-[#00cea8]/50" 
                  : "text-secondary"
              } hover:text-white hover:opacity-80 text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain opacity-80 hover:opacity-100 transition-all duration-300'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-b from-[#00cea8]/5 to-[#bf61ff]/5 backdrop-blur-sm absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-sm border border-[#00cea8]/10`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title 
                      ? "bg-gradient-to-r from-[#00cea8]/90 to-[#bf61ff]/90 bg-clip-text text-transparent" 
                      : "text-secondary"
                  } hover:text-white hover:opacity-80 transition-colors duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Very light gradient line at the bottom of the navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#00cea8]/20 to-[#bf61ff]/20 opacity-20"></div>
    </nav>
  );
};

export default Navbar;