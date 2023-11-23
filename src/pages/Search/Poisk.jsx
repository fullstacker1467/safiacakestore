import { Handbag, X } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AllProducts } from '../../FakeApi'

export const Poisk = () => {
    const [search, setSearch] = useState("");
    const SearchList = (e) => {
        const qiymat = e.target.value
        setSearch(qiymat.toLowerCase());
    };
    return (
        <>
            <div className="h-[100px]">
                <div className="container h-full flex items-center gap-3">
                    <Link to={'/'} className=' text-[12px] md:text-[14px]'>Главная</Link>
                    <span className='text-[#bea087] text-[12px] md:text-[14px]'>/</span>
                    <Link className=' text-[12px] md:text-[14px] font-light'>Поиск</Link>
                </div>
            </div>
            <div className="my-10">
                <div className="container">
                    <div className="flex items-center">
                        <input
                            type="text"
                            className='border-b-2 border-slate-700 w-[95%] outline-none py-2 text-xl md:text-3xl'
                            placeholder='Хочу найти'
                            onChange={(e) => SearchList(e)}
                        />
                        <X className='w-[5%] text-3 xl' />
                    </div>
                </div>
            </div>
            <div className="my-10">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-10">
                    {
                        search.length > 0 ? AllProducts
                            .filter((fil) => fil.title.includes(search))
                            .map((item, index) => (
                                <div key={index} className='text-center' >
                                    <div className='relative'>
                                        <Link>
                                            <img className='rounded-full' src={item.img} alt='top' />
                                            <Handbag className='absolute bottom-5 right-2 hover:bg-[#bea087] bg-[#dcc38b] rounded-full text-white p-3 h-[40px] w-[40px] md:h-[50px] md:w-[50px]' />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link className='font-semibold obor capitalize'>{item.title}</Link>
                                        <p className='text-[13px]'>{item.body}</p>
                                        <h3>{item.price} Сум</h3>
                                    </div>
                                </div>
                            )) :
                            <div className="my-20">
                                <div className="container flex justify-center items-center flex-col gap-5">
                                    <h1 className='text-5xl'>Ой!</h1>
                                    <img className='w-[200px]' src="https://safiabakery.uz/img/logo.svg" alt="" />
                                    <h2>Ничего не найдено</h2>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
