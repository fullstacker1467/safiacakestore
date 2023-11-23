import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NewProducts } from '../FakeApi';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Handbag } from '@phosphor-icons/react';


export const NewProduct = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                mousewheel={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Mousewheel]}
                className="mySwiper select-none"
            >
                {
                    NewProducts.map((item, index) => (
                        <SwiperSlide key={index} className='text-center'>
                            <div className='relative'>
                                <Link to={'/menu/sweets'}>
                                    <span className='absolute top-5 left-2 rounded-full bg-slate-800 text-white px-1.5 py-3 text-sm'>New</span>
                                    <img src={item.img} alt='product'/>
                                    <Handbag className='absolute bottom-5 right-2 text-white hover:bg-[#bea087] bg-[#dcc38b] rounded-full p-3 h-[40px] w-[40px] md:h-[50px] md:w-[50px]' />
                                </Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Link to={'/menu/sweets'} className='font-semibold obor'>{item.title}</Link>
                                <p className='text-[13px]'>{item.body}</p>
                                <h3>{item.price}<span className='mx-[2px]'>000</span> Сум</h3>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}
