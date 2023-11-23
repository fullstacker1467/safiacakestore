import React from 'react'
import { Link } from 'react-router-dom'

export const Nothing = () => {
    return (
        <div className="my-20">
            <div className="container flex justify-center items-center flex-col gap-5">
                <h1 className='text-5xl'>Ой!</h1>
                <img className='w-[200px]' src="https://safiabakery.uz/img/logo.svg" alt="" />
                <h2>Ничего не найдено</h2>
                <Link to={'/menu/sweets'} className='px-5 py-2 rounded-3xl text-white hover:bg-[#bea087] bg-[#dcc38b]'>Каталог</Link>
            </div>
        </div>
    )
}
