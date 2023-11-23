import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Menuikki } from '../../FakeApi'
import { saveCart } from '../../context/Basic'
import { useContext } from 'react'
import { AllProducts } from '../../FakeApi'

export const Pravpit = () => {
    const yangi = useContext(saveCart)
    const SetRender = useCallback((index) => {
        const ketti = AllProducts.filter(item => item.type.includes(index))
        yangi.setTovar(ketti)
    }, [yangi])
    return (
        <>
            <div className="h-[100px]">
                <div className="container h-full flex items-center gap-3">
                    <Link to={'/'} className=' text-[12px] md:text-[14px]'>Главная</Link>
                    <span className='text-[#bea087] text-[12px] md:text-[14px]'>/</span>
                    <Link to={'/menu/sweets'} className=' text-[12px] md:text-[14px]'>Меню</Link>
                    <span className='text-[#bea087] text-[12px] md:text-[14px]'>/</span>
                    <Link className='font-light text-[12px] md:text-[14px]'>Десерты правильного питания</Link>
                </div>
            </div>
            <div className="flex items-center py-10">
                <div className="container">
                    <h1 className='text-2xl'>Выбирайте категорию</h1>
                    <div className="flex flex-wrap gap-4 my-4">
                        <Link to={'/menu/sweets'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#bea087] focus:bg-[#dcc38b]'>За вкусненьким сюда</Link>
                        <Link to={'/menu/pp'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#dcc38b]'>Десерты правильного питания</Link>
                        <Link to={'/menu/polufabrikat'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#bea087] focus:bg-[#dcc38b]'>Полуфабрикаты</Link>
                        <Link to={'/menu/suv'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#bea087] focus:bg-[#dcc38b]'>Барное меню</Link>
                        <Link to={'/menu/delivery'} className='text-[15px] px-5 py-2 rounded-3xl text-white bg-[#bea087] focus:bg-[#dcc38b]'>Доставка аниматором</Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#bea087] py-5">
                <h1 className='text-3xl text-white'>ДЕСЕРТЫ ПРАВИЛЬНОГО ПИТАНИЯ</h1>
            </div>
            <div className="my-20">
                <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {
                        Menuikki.map((item, index) => (
                            <Link onClick={() => SetRender(item.type)} key={index} to={item.link} className='text-center'>
                                <img src={item.img} alt="" />
                                <h2 className='obor'>{item.title}</h2>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
