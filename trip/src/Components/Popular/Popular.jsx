import React, { useEffect } from 'react'
import './popular.scss'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'

//import the images
import img04 from '../../assets/04.jpg'
import img05 from '../../assets/05.jpg'
import img06 from '../../assets/06.jpg'
import img07 from '../../assets/07.jpg'
import img08 from '../../assets/08.jpg'
import img09 from '../../assets/09.jpeg'




const Data = [
  {
    id: 1,
    imgSrc: img04,
    destTitle: ' تبریز',
    location: 'کاخ شهرداری تبریز',
    grada: 'CULTURAL RELAX',

  }
  ,
  {
    id: 2,
    imgSrc: img05,
    destTitle: 'تبریز',
    location: 'ائل گلی',
    grada: 'CULTURAL RELAX',

  }
  ,
  {
    id: 3,
    imgSrc: img06,
    destTitle: 'تبریز',
    location: 'کوه عینالی (کوه عون بن علی)',
    grada: 'CULTURAL RELAX',

  }
  ,

  {
    id: 4,
    imgSrc: img07,
    destTitle: 'تبریز',
    location: 'موزه عصر آهن',
    grada: 'CULTURAL RELAX',

  }
  ,
  {
    id: 5,
    imgSrc: img08,
    destTitle: 'تبریز',
    location: 'مقبره الشعرا',
    grada: 'CULTURAL RELAX',

  }
  ,
  {
    id: 6,
    imgSrc: img09,
    destTitle: 'تبریز',
    location: 'کلیسای استفانوس',
    grada: 'CULTURAL RELAX',

  }
  ,
]


const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, {})
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <div data-aos="fade-up" data-aos-duration='2500' className=" secTitle">
              <h2> معروف ترین جاهای دیدنی تبریز</h2>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration='2500' className="mainContent grid">
          {
            Data.map(({ id, imgSrc, destTitle, location, grada }) => {
              return (
                <div className="singleDestination">
                  <div className="destImage">

                    <img src={imgSrc} alt="image title" />

                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>{location}</p>
                      < GoArrowRight className="icon" />
                    </div>
                  </div>
                  <div className="destFooter">
                    <div className="number">0{id}</div>
                    <div className="destText fiex">
                      <h6>{location}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className='icon' />
                        </span>
                        GᑌᑎEᔕᕼ
                      </span>
                    </div>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Popular