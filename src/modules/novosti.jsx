import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { News } from '../FakeApi';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export const Novosti = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
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
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper select-none h-full"
            >
                {
                    News.map((item, index) => (
                        <SwiperSlide key={index} >
                            <div className="flex flex-col gap-3">
                                <figure className='relative overflow-hidden'>
                                    <img src={item.img} className='rounded-full' alt='news'/>
                                    <Link to={'sfdsdfdsf'} className='absolute left-[50%] top-[50%] orta border-8 border-white hover:bg-[#bea087] bg-[#dcc38b] text-white px-2 py-11 rounded-full'>
                                        Подробнее
                                    </Link>
                                </figure>
                                <div className='flex flex-col gap-3'>
                                    <Link className='obor text-2xl font-light'>{item.title}</Link>
                                    <h3 className='text-sm text-gray-500'>{item.body}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}
