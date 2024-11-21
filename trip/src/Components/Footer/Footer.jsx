import React , {useEffect}from 'react'
import './footer.scss'
import { MdOutlineTravelExplore } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},{})
  return (
    <div data-aos="fade-up" data-aos-duration='2500'className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex ">
              <h1 className="flex">
                <MdOutlineTravelExplore className='icon' />
                GᑌᑎEᔕᕼ
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <ImFacebook className='icon' />
            <BsTwitterX className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration='40000'className="footerLinks">
          <span className="linkTitle">
            اطلاعات 
          </span>
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">وبلاگ </a>
          </li>
          <li>
            <a href="#">سفر </a>
          </li>
          <li>
            <a href="#">جستجو کنید </a>
          </li>
        </div>
        <div data-aos="fade-up" data-aos-duration='10000'className="footerLinks">
          <span className="linkTitle">
            لینک های مفید 
          </span>
          <li>
            <a href="#">سفرو شرایط </a>
          </li>
          <li>
            <a href="#">حمایت کردن </a>
          </li>
          <li>
            <a href="#">حریم خصوصی </a>
          </li>
        </div>
        <div data-aos="fade-up" data-aos-duration='50000'className="footerLinks">
          <span className="linkTitle">
            ارتباط باما 
          </span>
          <span className='phone'>+041366975991</span>
          <span className='email'>Gunesh.travel11@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer