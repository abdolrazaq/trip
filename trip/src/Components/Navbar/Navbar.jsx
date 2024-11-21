import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navBarActive, setNavBarActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const toggleNavBar = () => {
    setNavBarActive(!navBarActive);
  };

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='navBarSection'>
      <div className={`header ${headerActive ? 'activeHeader' : ''}`}>
        <div className="logoDiv">
          <a href="#" className='logo'>
            <h1 className='flex'>
              <MdOutlineTravelExplore className="icon" />
              GᑌᑎEᔕᕼ
            </h1>
          </a>
        </div>
        <div className={`navBar ${navBarActive ? 'activenavbar' : ''}`}>
          <ul className="navList flex">
            <li className="navItem">
              <Link to="/" className="navLink">خانه</Link>
            </li>
            <li className="navItem">
              <Link to="/blog" className="navLink">وبلاگ</Link>
            </li>
            <li className="navItem">
              <Link to="/Tourism" className="navLink">تفریح و گردشگری</Link>
            </li>
            <li className="navItem">
              <Link to="/tour" className="navLink">راهنمای سفر </Link>
            </li>
            <li className="navItem">
              <Link to="/contactus" className="navLink">ارتباط باما</Link>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <Link to="/login">ورود</Link>
              </button>
              <button className='btn'>
                <Link to="/signup">ثبت نام</Link>
              </button>
            </div>
          </ul>
          <div onClick={toggleNavBar} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={toggleNavBar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;


