import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { GoArrowLeft } from "react-icons/go";


//import image to use
import kandvan  from '../assets/kandvan.webp'
import Saint from '../assets/Saint.jpg'
import maghbare  from '../assets/maghbare.webp'
import dare from '../assets/dare.webp'
import { Link } from 'react-router-dom';

//so guys here also we are going to use the map  method to display our pasy post.
const Posts = [
    {
        id: 1,
        postImage: kandvan,
        title: 'روستای کندوان',
        desc: 'روستای کندوان که یکی از اعجاب‌آورترین روستاهای گردشگری ایران به شمار می‌رود، در نزدیکی تبریز در استان آذربایجان شرقی قرار دارد. این جاذبه گردشگری یکی از جذاب‌ترین روستاهای صخره‌ای جهان است که کماکان مردمانش در خانه‌های سنگی آن زندگی می‌کند.',
        href : "/kandavanvillage"
    }
    ,
    {
        id: 2,
        postImage: Saint ,
        title: 'کلیسای سنت استپانوس',
        desc: 'کلیسای سنت استپانوس یکی از مهمترین کلیساهای ایران محسوب می‌شود که به نام یکی از مبلغان مسیحیت، نام‌گذاری شده است. این کلیسا بعد از قره کلیسا دومین کلیسای مهم ارمنیان کشور است. کلیسای سنت استپانوس در شهرستان جلفای استان آذربایجان شرقی و در کنار رودخانه ارس در دامنه بلندی‌هایی به نام ماغارد بنا شده است.',
        href : "/church"
    }
    ,

    {
        id: 3,
        postImage: maghbare  ,
        title: 'مقبره الشعرا',
        desc: 'یکی از دیدنی ‌های تبریز، مقبره الشعرا محسوب می‌شود و هر گردشگری که به این شهر سفر کرده باشد، نام آن را شنیده و از آن دیدن کرده است. این بنا که یادبودی از شاعران و ادیبان مدفون در گورستان خرساب است، به‌عنوان نماد تبریز نیز شناخته می‌شود. در این مکان شاعرانی چون اسدی طوسی، خاقانی شروانی و شهریار دفن شده‌اند.',
        href : "/poets"
        
    }
    ,
    {
        id:4,
        postImage:dare ,
        title: 'دره دارانداش',
        desc: 'دره دارانداش که به نام دره گوورچینلیق نیز شناخته می‌شود؛ مقصدی پرهیجان برای طبیعت‌گردان و علاقه‌مندان به سفرهای ماجراجویانه است. با سفر به این دره حیرت‌انگیز، در کنار تفریح و لذت بردن از زیبایی‌های این مکان؛ آدرنالین خونتان بیشتر می‌شود و لحظاتی را پیش رو خواهید داشت که شاید تاکنون در هیچ جای دیگر تجربه نکرده باشید.',
        href : "/valley"
        
    }
    ,
]

const Blog = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },{})
    return (
        <section className='blog container section'>
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration='2500'className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration='2500'className="secTitle">
                    جاهای دیدنی آذربایجان شرقی
                    </h2>
                </div>
            </div>
            {
                Posts.map(({ id, postImage, title, desc , href}) => {
                    return (


                        <div className="mainContainer grid">
                            <div data-aos="fade-left" data-aos-duration='2500'className="singlePost grid">
                                <div data-aos="fade-left" data-aos-duration='4000'className="imgDiv">
                                    <img src={postImage} alt={title} />

                                </div>
                                <div className="postDetalist">
                                    <h3>
                                        {title}
                                    </h3>
                                    <p>
                                        {desc}
                                    </p>

                                    <Link to={href}  data-aos="fade-up" data-aos-duration='2500' className="flex">
                                        بیشتر بخوانید 
                                        <GoArrowLeft className='icon' />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section >
    )
}

export default Blog;