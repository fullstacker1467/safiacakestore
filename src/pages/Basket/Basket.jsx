import { useContext } from "react";
import React from "react";
import { saveCart } from "../../context/Basic";
import { Info } from "../../modules/info";
import { Nothing } from "../../modules/nothing";

export const Basket = () => {
  const yangi = useContext(saveCart);
  return (
    <>
      <div className="overflow-hidden">
        <div className="container py-10 text-slate-900">
          <h1 className="text-3xl my-10">КОРЗИНА</h1>
          {yangi.cart.length > 0 ? (
            <div className="hidden md:flex justify-between text-center border-b-2 border-slate-500 text-xl py-2">
              <h1 className="w-2/5">Товар</h1>
              <h1 className="w-1/5">Количество</h1>
              <h1 className="w-1/5">Цена</h1>
              <h1 className="w-1/5">Удалить</h1>
            </div>
          ) : (
            <div></div>
          )}
          {yangi.cart.length > 0 ? (
            yangi.cart.map((item, index) => (
              <Info key={index} item={item} index={index} />
            ))
          ) : (
            <Nothing />
          )}
        </div>
      </div>
    </>
  );
};
