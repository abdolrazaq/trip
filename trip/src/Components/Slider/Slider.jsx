import React from 'react'
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from 'react';
import images from './images';
import './slider.scss'

const Slider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    }, []);
    return (
        <section className='Slider section container'>
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration='2500' className=" secIntro">
                    <h2> جنگل های بکر ارسباران</h2>
                </div>
                <div className='slider'>
                    <motion.div ref={carousel} className='carousel'>
                        < motion.div drag='x'
                            dragConstraints={{ right: width, left: 0 }}
                            className='inner-carousel'>

                            {images.map(image => {
                                return (
                                    <motion.div className='item' key={image}>
                                        <img src={image} />
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Slider