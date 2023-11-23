import React from 'react'
import { Link } from 'react-router-dom'
import { Handbag } from '@phosphor-icons/react'
import { AllProducts } from '../../FakeApi'

export const Polufabrikat = () => {
    const yangi = AllProducts.filter(item => item.type.includes('Полуфабрикаты'))
    return (
        <>
            <div className="h-[100px]">
                <div className="container h-full flex items-center gap-3">
                    <Link to={'/'} className=' text-[12px] md:text-[14px]'>Главная</Link>
                    <span className='text-[#bea087] text-[12px] md:text-[14px]'>/</span>
                    <Link to={'/menu/sweets'} className=' text-[12px] md:text-[14px]'>Меню</Link>
                    <span className='text-[#bea087] text-[12px] md:text-[14px]'>/</span>
                    <Link to={'/menu/polufabrikat'} className='font-light text-[12px] md:text-[14px]'>Полуфабрикаты</Link>
                </div>
            </div>
            <div className="flex items-center py-10">
                <div className="container">
                    <h1 className='text-2xl'>Выбирайте категорию</h1>
                    <div className="flex flex-wrap gap-4 my-4">
                        <Link to={'/menu/sweets'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#bea087] focus:bg-[#dcc38b]'>За вкусненьким сюда</Link>
                        <Link to={'/menu/pp'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#bea087] focus:bg-[#dcc38b]'>Десерты правильного питания</Link>
                        <Link to={'/menu/polufabrikat'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#dcc38b]'>Полуфабрикаты</Link>
                        <Link to={'/menu/suv'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#bea087] focus:bg-[#dcc38b]'>Барное меню</Link>
                        <Link to={'/menu/delivery'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#bea087] focus:bg-[#dcc38b]'>Доставка аниматором</Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#bea087] py-5">
                <h1 className='text-3xl text-white'>ПОЛУФАБРИКАТЫ</h1>
            </div>
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-3">
                {
                    yangi.map((item, index) => (
                        <div key={index} className='text-center' >
                            <div className='relative'>
                                <Link>
                                    <img className='rounded-full' src={item.img} alt='top' />
                                    <Handbag className='absolute bottom-5 right-2 hover:bg-[#bea087] bg-[#dcc38b] rounded-full text-white p-3 h-[40px] w-[40px] md:h-[50px] md:w-[50px]' />
                                </Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Link className='font-semibold obor'>{item.title}</Link>
                                <p className='text-[13px]'>{item.body}</p>
                                <h3>{item.price} Сум</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
