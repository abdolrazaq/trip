import React, { useEffect } from 'react'
import './about.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

//import image
import kabod from '../../assets/kabod.webp'
import bazar from '../../assets/bazar.webp'
import jmalabad from '../../assets/jmalabad.jpg'

//import video
import video from '../../assets/12.mp4'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, {})
  return (
    <section className='about section'>
      <div className="secContainer">
        <div className="mainContent container grid ">
          <div data-aos="fade-up" data-aos-duration='2500' className="singleItem">
            <img src={kabod} alt="Image name" />
            <h3>مسجد و گنبد کبود</h3>

            <p>
              مسجد کبودازجمله برجسته ترین نقاط دیدنی تبریز محسوب می‌شودکه بامعماری منحصربه‌فرد، متعلق به قرن نهم هجری قمری و باقیمانده از دوران پادشاهی قراقویونلوها است. این مسجد تاریخی، تنها اثر باقیمانده از دوران پایتختی تبریز در سلسله فرمانروایی قراقویونلوها است.
              <br />
              این مسجد تاریخی از سال ۱۳۸۶ در فهرست میراث فرهنگی در انتظار ثبت جهانی یونسکو قرار گرفته است و تا به امروز خود بنا به تنهایی به ثبت جهانی نرسیده اما جزو مجموعه بازار تبریز در فهرست یونسکو قرار دارد.
            </p>



          </div>

          <div data-aos="fade-up" data-aos-duration='2500' className="singleItem">
            <img src={bazar} alt="Image name" />
            <h3>بازار تبریز</h3>

            <p>
              بازار معروف تبریز، بزرگ‌ترین بازار سرپوشیده آجری جهان و یکی از شاهکارهای معماری ایرانی بوده که با مساحت هفت کیلومتر مربع و طول یک کیلومتر، بزرگترین مجموعه به هم پیوسته و مسقف دنیا محسوب می‌شود.
              <br />

              این ظرفیت عظیم تاریخ فرهنگ و هنر خطه آذربایجان که نمود جایگاه عالی تبریز در عرصه تجارت در جاده ابریشم است، سال 1389 به عنوان یازدهمین اثر ثبت جهانی ایران در یونسکو به ثبت رسیده است.
              راسته طلافروش‌های بازار تبریز، شهرت بسیار زیادی دارد.

            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration='2500' className="singleItem">
            <img src={jmalabad} alt="Image name" />
            <h3>کاروانسرای جمال آباد</h3>

            <p>
              كاروانسرای جمال آباد در نزدیکی روستای جمال‌آباد، در ۳۵ کیلومتری شهر میانه قرار دارد. با قدمتی که به سال ۱۰۶۵ هجری قمری بازمی‌گردد، این بنای تاریخی در دوره ایلخانی احداث شد و بعدها توسط شاه عباس ثانی، در دوره صفوی مورد مرمت قرار گرفت.
              <br />
              سردر بنا به‌صورت دو طبقه است و چهار برج مدور در چهار ضلع آن واقع شده‌‌اند. این اثر به‌عنوان یکی از جاهای دیدنی میانه، در تاریخ ۷ مهر ۱۳۸۱، با شماره‌ی ثبت ۶۱۵۲ در فهرست آثار ملی ایران به ثبت رسید.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div data-aos="fade-left" data-aos-duration='2500' className="cardContent grid">
            <div data-aos="fade-left" data-aos-duration='2500' className="cardText">
              <h2>
                قلعه بابک خرمیدین چطور جایی است ؟
              </h2>
              <p>
                قلعه بابک با نام دژ بابک یا قلعه جمهور هم شناخته می‌شود و یکی از مهم‌ترین جاهای دیدنی کلیبر در استان آذربایجان شرقی است. یکی از ویژگی‌ها مهم این قلعه، وجود دره‌هایی به‌عمق ۴۰۰ تا ۶۰۰ متر اطراف آن است که قلعه را در آغوش گرفته‌اند.
              </p>
              <br />
              <p>
                یکی از جذابیت‌های مهم قلعه بابک، دید وسیعی است که به اطراف دارد. همین دید وسیع باعث شده این قلعه یک فضای عالی برای دیده‌بانی هم داشته باشد. شاید مسیر سختی را برای رسیدن به قلعه باید طی کنید؛ اما همه لطفش به این است که وقتی به قلعه بابک می‌رسید، یادتان می‌رود راه چقدر سخت بوده
              </p>

            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted type='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About