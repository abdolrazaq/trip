import ImageSlider3 from './ImageSlider3'
import { SliderData1 } from './SliderData1'
import './valley.scss'

import image1 from '../../assets/dare.webp'
import image2 from '../../assets/d.1.webp'
import image3 from '../../assets/d.2.webp'
import image4 from '../../assets/d.3.webp'
import image5 from '../../assets/d.4.webp'


const Valley = () => {

    const Link = 'https://www.google.com/maps/place/%DA%AF%D9%88%D8%B1%DA%86%DB%8C%D9%86%D9%84%DB%8C%D9%82+%D8%AF%D8%B1%D9%87+%D8%B3%DB%8C+%D8%AF%D8%A7%D8%B1%D8%A7%D9%86%D8%AF%D8%A7%D8%B4+%D8%B4%D9%84%D8%A7%D9%84%D9%87+%D8%B3%DB%8C%E2%80%AD/@38.6999269,45.9511878,17z/data=!3m1!4b1!4m6!3m5!1s0x4016e17002a9af95:0xc2151b714b08185b!8m2!3d38.6999227!4d45.9537627!16s%2Fg%2F11v3c8hfn9?entry=ttu'
    return (
        <>
            <div className=" Valley container section">

                <ImageSlider3 slides={SliderData1} />

                <div className="secContainer">

                    <h2>دره دارانداش</h2>
                    
                    <p>
                        دره دارانداش که به نام دره گوورچینلیق نیز شناخته می‌شود؛ مقصدی پرهیجان برای طبیعت‌گردان و علاقه‌مندان به سفرهای ماجراجویانه است. با سفر به این دره حیرت‌انگیز، در کنار تفریح و لذت بردن از زیبایی‌های این مکان؛ آدرنالین خونتان بیشتر می‌شود و لحظاتی را پیش رو خواهید داشت که شاید تاکنون در هیچ جای دیگر تجربه نکرده باشید.
                    </p>
                    <h2>با دره دارانداش مرند آشنا شوید:</h2>
                    <ul>
                        <li className='ul'><a>معرفی دره دارانداش</a></li>
                        <li className='ul'><a>دره دارانداش کجاست؟</a></li>
                        <li className='ul'><a>بهترین زمان سفر به دره دارانداش</a></li>
                        <li className='ul'><a>معماری و پلان کلیسای سنت استپانوس</a></li>
                    </ul>
                    <h2>معرفی دره دارانداش</h2>
                    <img src={image2} alt='Valley' className='img'/>
                    <p>
                        سفر این بار کجارو به مکانی است که پیوندگاه آب و صخره‌ها است. جایی که رود آق چای با عبور خود از میان صخره‌ها و سنگ‌های سخت، دره‌ای تماشایی به نام دارانداش را در دل طبیعت زیبای زنوز ایجاد کرده است. این رود با عبور خود، دل صخره‌ها را شکافته است و با ایجاد  دالان‌هایی آب‌رو، موجبات به شهرت درسیدن این مکان را‌ فراهم کرده است. این دالان‌ها مأمن و پناهگاه کبوتران و پرندگان نیز است.
                    </p>
                    <p>
                        فاصله صخره‌های دره دارانداش بین دو تا ۱۰ متر است و به هزارتویی افسانه‌ای می‌ماند که آدمی را به یاد صحنه‌های فیلم‌های پر ماجرا می‌اندازد. طول این دره به ۵۰۰ متر می‌رسد و جریان هفت آبشار تماشایی، زیبایی آن را دو چندان کرده است.
                    </p>
                    <h2>چرا این دره دارانداش نام دارد؟</h2>
                    <p>
                        دره تماشایی دارانداش که از جاهای دیدنی استان آذربایجان شرقی به حساب می‌آید، نام‌های مختلفی دارد. دارانداش و داران داش از جمله آن‌ها است که داش در زبان ترکی به‌معنای سنگ است و شاید دلیل به کار بردن این اسم به خاطر وجود صخره‌ها و سنگ‌ها باشد. گاهی از اوقات آن را با نام دره درندشت نیز معرفی می‌کنند که البته این نام از اعتبار کمتری برخوردار است.
                    </p>
                    <p>
                        گوورچینلیق، گورچینیک دره سی و دره گورچینیک از دیگر نام‌هایی است که محلی‌ها برای دره دارانداش به کار می‌برند. عده‌ای نیز این دره را با نام گوورچینلیک تلفظ می‌کنند. دلیل این نام‌گذاری بی‌ارتباط با وجود کبوتران و پرندگان در دالان‌ها و لابه‌لای صخره‌های دره نیست؛ به‌گونه‌ای که با پیمایش این دره و در طول مسیرتان، آن‌ها را می‌بینید.
                    </p>
                    <h2>دره دارانداش کجاست؟</h2>
                    <img src={image3} alt='Valley' className='img'/>
                    <p>
                        دره دارانداش یکی از جاهای دیدنی مرند در استان آذربایجان شرقی است که در نزدیکی روستای هریس یا هوروز قرار دارد. البته در این منطقه روستایی به اسم دارانداش وجود دارد؛ اما هریس به مسیر منتهی به دره نزدیک‌تر است. این دره در دامنه‌های جنوب شرقی ارتفاعات کیامکی و دامنه کوه زیدر قرار دارد که یکی از مناطق تحت حفاظت محیط‌زیست این استان است.
                    </p>
                    <p>آدرس دره دارانداش: استان آذربایجان شرقی، شهرستان مرند، بخش مرکزی، دهستان زنوزق، ۱۳ کیلومتری شمال روستای هریس، ۱۰ کیلومتری شمال غربی روستای دارانداش
                        <a href={Link} target='_blank' rel='noopener noreferrer'> (مشاهده روی نقشه ) </a>
                    </p>
                    <ul>
                        <li className='ul'>فاصله تبریز تا دارانداش: ۱۴۸ کیلومتر؛ حدود دو ساعت و ۳۰ دقیقه</li>
                        <li className='ul'>موقعیت جغرافیایی: N۳۸۴۱ E۴۵۵۶</li>
                    </ul>
                    <h2>مسیر دسترسی به دره دارانداش</h2>
                    <img src={image4} alt='Valley'  className='img'/>
                    <p>
                        دارانداش یکی از مقاصد دره نوردی ایران است؛ پس کوله سفر را ببندید و رهسپار شمال غرب کشور شوید. برای رسیدن به این دره، دو مسیر پیش رو دارید که متناسب با حال و احوالتان با طی کردن هر یک از آن‌ها، مکانی شگفت‌انگیز و خارق‌العاده را در برابر چشمانتان خواهید دید.
                    </p>
                    <h2>مسیر اول</h2>
                    <p>
                        اگر به‌همراه خانواده راهی این دره گوورچینلیق می‌شوید، زمان کافی ندارید یا حال و حوصله طی کردن مسیر طولانی و پر فرازونشیب را ندارید، توصیه می‌کنیم این مسیر را در پیش بگیرید:
                    </p>
                    <p>
                        بعد از رسیدن به استان آذربایجان شرقی از مسیر ارتباطی تبریز به مرند وارد مسیر شهرستان زنوز شوید و سپس از روستاهای زنوزاق و روستای هریس (هوروز) عبور کنید. جاده‌ای كه به روستا مي‌رسد، بعد از روستاي كوهكمر حدود ۶ تا هفت كيلومتر خاکی دارد که این مسیر خاکی مسیر مناسبی حتی برای سواری‌های کوچک است. بعد از رسیدن به روستای هریس،  می‌توانید با گذر از باغات و سرسبزی‌های این روستا به دره گوورچینلیق برسید که طی این مسافت زیبا حدود نیم ساعتی بیشتر نمی‌شود.
                    </p>
                    <h2>مسیر دوم</h2>
                    <p>
                        از سوی دیگر، اگر اهل ماجراجویی و هیجان هستید و وسایل مناسب سنگ‌نوردی و صخره‌نوردی را هم به‌همراه دارید، مسیر دوم را در پیش بگیرید:

                        این مسیر طولانی‌تر است و قبلا مسیر دسترسی به روستای هریس به شمار می‌رفت و طی کردن آن برای وسایل نقلیه سخت است. برای پیمودن این راه باید از سه راه دارانداش به‌سمت روستای هریس بروید و از آنجا بعد از دو ساعت و پانزده دقیقه پیاده‌روی و صخره‌نوردی به دره دارانداش یا همان دره گوورچینلیق برسید.
                    </p>
                    <h2>بهترین زمان سفر به دره دارانداش</h2>
                    <img src={image5} alt='Valley' className='img'/>
                    <p>
                        بدون شک بهار هنگامه سفر به دامان طبیعت، به‌ویژه دره‌نوردی و بهره بردن از هوای مطبوع آن است. پس کوله‌‌بار سفر را در بهار مهیا و خود را آماده یک تفریح فوق‌العاده مهیج در دره دارانداش است.
                    </p>
                    <p>
                        بدیهی است که این دره با داشتن آب‌وهوای خنک و دل‌پذیر، مقصدی عالی برای فرار از گرمای تابستان و داشتن یک آب‌تنی فراموش‌نشدنی است پس سفر به گوورچینلیق را در فصل تابستان فراموش نکنید.
                    </p>
                    <p>
                        در ضمن یادتان باشد با توجه به سردسیر بودن منطقه آذربایجان، در فصل‌های بارندگی از رفتن به این دره خودداری کنید یا حداقل تجهیزات لازم را به‌همراه داشته باشید.
                    </p>
                    <h2>پرسش‌های متداول</h2>
                    <h4>دره دارانداش کجاست؟</h4>
                    <p>
                        دره دارانداش یکی از جاهای دیدنی مرند در استان آذربایجان شرقی است که در نزدیکی روستای هریس یا هوروز قرار دارد.
                    </p>
                    <h2>چرا این دره دارانداش نام دارد؟</h2>
                    <p>
                        داش در زبان ترکی به‌معنای سنگ است و شاید دلیل به کار بردن این اسم به‌خاطر وجود صخره‌ها و سنگ‌ها باشد.
                    </p>
                    <h2>بهترین زمان سفر به دره دارانداش چه فصلی است؟</h2>
                    <p>
                        بدون شک بهار هنگامه سفر به دامان طبیعت، به‌ویژه دره‌نوردی و بهره بردن از هوای مطبوع در دره دارانداش است.
                    </p>
                </div>
            </div>
           
        </>
    )
}
export default Valley;