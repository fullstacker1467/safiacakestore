import React, { useContext, useCallback } from "react";
import { saveCart } from "../../context/Basic";
import { Link } from "react-router-dom";

export const Bird = () => {
  const yangi = useContext(saveCart);
  const increment = useCallback(
    (index) => {
      const updatedData = [...yangi.data];
      updatedData[index].quantity += 1;
      yangi.setData(updatedData);
    },
    [yangi]
  );
  const decrement = useCallback(
    (index) => {
      const updatedData = [...yangi.data];
      if (updatedData[index].quantity > 1) {
        updatedData[index].quantity -= 1;
        yangi.setData(updatedData);
      }
    },
    [yangi]
  );
  const AddBacket = useCallback(
    (index) => {
      let basketData = yangi.cart.find((item) => item.id === index.id);
      if (!basketData) {
        yangi.setCart([...yangi.cart, { ...index }]);
      }
    },
    [yangi]
  );
  return (
    <>
      {yangi.data.map((item, index) => (
        <div key={index}>
          <div className="my-10">
            <div className="h-[100px]">
              <div className="container h-full flex items-center gap-3">
                <Link to={"/"} className=" text-[12px] md:text-[14px]">
                  Главная
                </Link>
                <span className="text-[#bea087] text-[12px] md:text-[14px]">
                  /
                </span>
                <Link
                  to={"/menu/sweets"}
                  className=" text-[12px] md:text-[14px]"
                >
                  Меню
                </Link>
                <span className="text-[#bea087] text-[12px] md:text-[14px]">
                  /
                </span>
                <Link className="font-light text-[12px] md:text-[14px] capitalize">
                  {item.title}
                </Link>
              </div>
            </div>
          </div>
          <div className="my-10">
            <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
              <img src={item.img} alt="" />
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl capitalize">{item.title}</h1>
                <h1 className="text-2xl">
                  {item.price} <span className="mx-[2px]">000</span> Сум
                </h1>
                <div className="flex gap-6">
                  <div className="flex text-xl gap-5 bg-slate-300 py-2 px-2 rounded-full text-white">
                    <button className="px-4" onClick={() => decrement(index)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button className="px-4" onClick={() => increment(index)}>
                      +
                    </button>
                  </div>
                  <Link
                    to={"/menu/sweets"}
                    onClick={() => AddBacket(item)}
                    className="text-white bg-[#dcc38b] py-2 px-5 rounded-full"
                  >
                    В корзину
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
