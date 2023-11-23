import React, { useCallback, useContext } from "react";
import { saveCart } from "../context/Basic";

export const Info = ({ item, index }) => {
    const yangi = useContext(saveCart)
    const increment = useCallback(
        (index) => {
            const updatedData = [...yangi.cart];
            updatedData[index].quantity += 1;
            yangi.setCart(updatedData);
        },
        [yangi]
    );
    const decrement = useCallback(
        (index) => {
            const updatedData = [...yangi.cart];
            if (updatedData[index].quantity > 1) {
                updatedData[index].quantity -= 1;
                yangi.setCart(updatedData);
            }
        },
        [yangi]
    );
    const del = (index) => {
        yangi.setCart(yangi.cart.filter((item) => item.id !== index));
    };
    return (
        <>
            <div
                className="hidden md:flex flex-wrap justify-between items-center p-2 my-5"
            >
                <div className="w-full md:w-2/5 flex">
                    <img src={item.img} className="w-[140px] mr-2" alt="" />
                    <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-2xl">{item.title}</h1>
                        <p>{item.body}</p>
                        <h2 className="text-xl">{item.price}<span className="mx-[2px]">000</span> Сум</h2>
                    </div>
                </div>
                <div className="w-1/2 md:my-0 my-10 md:w-1/5 text-center flex justify-center items-center gap-3">
                    <div className="flex text-xl gap-5 bg-slate-300 py-2 px-2 rounded-full text-white">
                        <button className='px-4' onClick={() => decrement(index)}>-</button>
                        <span>{item.quantity}</span>
                        <button className='px-4' onClick={() => increment(index)}>+</button>
                    </div>
                </div>
                <h1 className="w-1/2 md:my-0 my-10 md:w-1/5 text-center">
                    Итого: {item.price * item.quantity}<span className="mx-[2px]">000</span> Сум
                </h1>
                <button onClick={() => del(item.id)} className="w-full md:w-1/5 text-white bg-[#dcc38b] py-2 px-5 rounded-full">
                    Удалить
                </button>
            </div>
            <div className="flex flex-col md:hidden p-2 my-5">
                <img src={item.img} className="" alt="" />
                <div className="flex flex-col gap-3">
                    <h3>{item.title}</h3>
                    <p className="text-sm">{item.body}</p>
                    <h2>{item.price}<span className="mx-[2px]">000</span> Сум</h2>
                </div>
                <div className="flex items-center gap-2 my-2">
                    <div className="flex text-lg gap-3 bg-slate-300 py-1 px-1 rounded-full text-white">
                        <button className='px-4' onClick={() => decrement(index)}>-</button>
                        <span>{item.quantity}</span>
                        <button className='px-4' onClick={() => increment(index)}>+</button>
                    </div>
                    <button
                        onClick={() => del(item.id)} className="text-white bg-[#dcc38b] py-2 px-5 rounded-full">
                        Удалить
                    </button>
                </div>
            </div>
        </>
    )
}
