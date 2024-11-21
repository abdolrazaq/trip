import React, { useEffect } from 'react';
import './offers.scss';
import { MdKingBed } from 'react-icons/md';
import { MdBathtub } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { MdAirportShuttle } from 'react-icons/md';
import { MdLocationPin } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

// let us import images
import img1 from '../../assets/01.jpg';
import img2 from '../../assets/02.jpg';
import img3 from '../../assets/03.jpg';

//so since we have finished styling every content, let us also use the same hight order array
//methos (map) to list our offers.
const Offer = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'آذربایجان شرقی',
        location: ' شهر کلیبر  ۱۰کیلومتری جاده کلیبر به طرف جانانلو',
        name: 'اقامتگاه  شاه عباسی',
    },
    {
        id: 1,
        imgSrc: img2,
        destTitle: 'آذربایجان شرقی',
        location: ' ۲ کیلومتر بطرف جاده جانانلو روستای گلوسنگ',
        name: 'اقامتگاه گلوسنگ ',
    },
    {
        id: 1,
        imgSrc: img3,
        destTitle: 'آذربایجان شرقی',
        location: '  روستای کندوان، مقابل چشمه آب معدنی',
        name: ' عمارت سنگی کندوان',
    },
];

const Offers = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, {});

    return (
        <section className="offer container section">
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2500" className="secIntro">
                    <h2 className="secTitle">معرفی بهترین اقامتگاه های بوم گردی</h2>
                    <p className="secDesc">
                        اقامتگاه های بوم گردی خانه های قدیمی هستند که با بازسازی تغییر کاربری داده اند بسیاری از
                        مسافران دوست دارند در محیطی متفاوت تجربه ی اقامت داشته باشند تا از سفر خود بیشتر لذت ببرند.
                        اقامتگاه های بوم گردی هم باعث حفظ خانه های قدیمی، سبک معماری اصیل شده است و هم باعث تجربه ی
                        متفاوت برای مسافران هست. در ایران هر روز بر تعداد اقامتگاه های بوم گردی افزود می شود
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500" className="mainContent grid">
                    {Offer.map(({ id, imgSrc, destTitle, location, name }) => {
                        return (
                            <div key={id} data-aos="fade-up" data-aos-duration="2500" className="singleOffer">
                                <div className="destImage">
                                    <img src={imgSrc} alt={destTitle} />
                                    <span className="discount">30%off</span>
                                </div>
                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>{name}</h4>
                                        <span className="status">برای اجاره</span>
                                    </div>
                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                            <MdKingBed className="icon" />
                                            <small>2 تخته</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdBathtub className="icon" />
                                            <small>1 حمام</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <FaWifi className="icon" />
                                            <small>wi-fi</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdAirportShuttle className="icon" />
                                            <small>وسایل نقلیه</small>
                                        </div>
                                    </div>
                                    <div className="location flex">
                                        <MdLocationPin className="icon" />
                                        <small>آذربایجان شرقی, {location}</small>
                                    </div>
                                    <button className="btn flex">
                                        بازدید <BsArrowRight className="icon" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Offers;