import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <div>
                <video className='mx-auto' autoPlay loop muted>
                    <source src='https://safiabakery.uz/uploads/sliders/slider_1672233435.mp4' type='video/mp4' />
                </video>
            </div>
            <div className="little-menu gap-5 md:gap-14">
                <Link to={'/menu/sweets'} className='flex flex-col justify-center items-center'><img src="https://safiabakery.uz/uploads/products/i_1671090994.png" alt='img' /> <span className='text-[14px]'>Круглые</span></Link>
                <Link to={'/menu/sweets'} className='flex flex-col justify-center items-center'><img src="https://safiabakery.uz/uploads/products/i_1669274910.png" alt='img' /> <span className='text-[14px]'>Большие</span></Link>
                <Link to={'/menu/sweets'} className='flex flex-col justify-center items-center'><img src="https://safiabakery.uz/uploads/products/i_1669271334.png" alt='img' /><span className='text-[14px]'>Пирожные</span></Link>
                <Link to={'/menu/sweets'} className='flex flex-col justify-center items-center'><img src="https://safiabakery.uz/uploads/products/i_1669286131.png" alt='img' /><span className='text-[14px]'>Печенья</span></Link>
                <Link to={'/menu/sweets'} className='flex flex-col justify-center items-center'><img src="https://safiabakery.uz/uploads/products/i_1677584809.png" alt='img' /><span className='text-[14px]'>Слоеная</span></Link>
            </div>
        </>
    )
}
