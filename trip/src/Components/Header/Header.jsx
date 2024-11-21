import React, { useEffect } from 'react';
import './Header.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []); // آرایه خالی به عنوان دومین آرگومان

    return (
        <section className='home popular'>
            <div className="secContainer">
                <div className="homeText">
                    <h1 data-aos="fade-up" className="title">
                        جاهای دیدنی آذربایجان شرقی که نباید از دست بدهید
                    </h1>
                    <p data-aos="fade-up" data-aos-duration='2500' className="subTitle">
                        گشت‌وگذار در آذربایجان شرقی
                    </p>
                    <button data-aos="fade-up" data-aos-duration='3000' className='btn'>
                        <a href="#">جستجو کنید</a>
                    </button>
                </div>
                <div className="homeCard grid">
                    <div data-aos="fade-right" data-aos-duration='2000' className="locationDiv">
                        <label htmlFor="location">مکان</label>
                        <input type="text" placeholder='مکان مورد نظر راوارد کنید' />
                    </div>
                    <div data-aos="fade-right" data-aos-duration='2500' className="distDiv">
                        <label htmlFor="distance">مسافت</label>
                        <input type="text" placeholder='کیلومتر...' />
                    </div>
                    <div data-aos="fade-right" data-aos-duration='3000' className="pricDiv">
                        <label htmlFor="price">قیمت</label>
                        <input type="text" placeholder='ریال' />
                    </div>

                    <button data-aos="fade-left" data-aos-duration='2000' className='btn'>
                        جستجو
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Header;