import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { expenses, money, products } = useSelector((s) => s);
  console.log(products);
  const dispatch = useDispatch();

  function getProduct() {
    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      price,
    };
    dispatch({ type: "ToDo", paylaod: newProduct });
    setName("");
    setPrice("");
  }
  const takeMoney = (som) => {
    dispatch({ type: "TAKE_MONEY", paylaod: som });
  };

  const addMoney = (som) => {
    dispatch({ type: "ADD_MONEY", paylaod: +som });
  };
  return (
    <div className="container mx-auto">
      <div className="hero flex items-center justify-around my-8">
        <div className="expenses w-[250px] h-[150px] bg-red-800 flex items-center justify-center text-center flex-col gap-8">
          <h1 className="text-white text-3xl">expenses:</h1>
          <h1 className="text-white text-3xl">{expenses} $</h1>
        </div>
        <div className="money expenses w-[250px] h-[150px] bg-blue-800 flex items-center justify-center text-center flex-col gap-8">
          <h1 className="text-white text-3xl">cash:</h1>
          <h1 className="text-white text-3xl">{money}$</h1>
        </div>
      </div>
      <div className="w-[40%] mx-auto flex items-center justify-center flex-col gap-6 text-start">
        <div class="relative z-0 w-full mb-5 group  ">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-white text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-white text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Price
          </label>
        </div>
        <button
          onClick={() => getProduct()}
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Bay Product
        </button>
      </div>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>

              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((el) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.name}
                </th>
                <td class="px-6 py-4">{el.price}</td>
                <td class="px-6 py-4">
                  <button
                    onClick={() => (takeMoney(el.price), addMoney(el.price))}
                    type="button"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Bay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero;
