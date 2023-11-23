import React from 'react'
import { Tortlar } from '../FakeApi'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export const Tort = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#2c1e1e',
                }}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                centeredSlides={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper select-none"
            >
                {
                    Tortlar.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col">
                                <img src={item.img} alt='tort'/>
                                <Link className='obor text-center text-white text-2xl'>{item.name}</Link>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}
