/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import CartIteam from '../components/CartIteam';
import { useSelector } from 'react-redux';
// import { ToastContainer } from "react-toastify";


const Cart = () => {
 const productData = useSelector((state) => state.ecommerce.productData);
 const [totalAmt , setTotalAmt] = useState ("");

 useEffect(()=>{
    let price = 0 ;
    productData.map((item)=>{
        price += item.price * item.quantity;
        return price
    })
    setTotalAmt(price.toFixed(2));
 }, [productData]);

    return (
        <div>
           <img className='w-full h-60 object-cover'
            src="/src/assets/cartBg.jpg" alt="cartBg" />
            <div className='max-w-screen-xl mx-auto py-20 flex flex-col lg:flex-row'>
              <CartIteam/>
               <div className=' w-full lg:w-1/3 bg-[#fafafa] py-6 px-4'>
                <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                    <h2 className='text-2xl font-medium'>Order Total</h2>
                    <p className='flex items-center gap-4 text-base'>
                        Subtotal{""}
                        <span className=' font-titleFont font-bold text-lg'>$ {totalAmt}</span>
                    </p>
                    <p className=' flex items-start gap-4 text-base'>
                        Shipping{""}
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, error.
                        </span>
                    </p>            
                </div>
                <p className='font-titleFont font-semibold flex justify-between mt-6'>
                    Total <span className='text-xl font-bold'>${totalAmt}</span>
                </p>
                <button className='text-base bg-red-500 text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300' >Confirm to chekout</button>
               </div>
            </div>
      {/* <ToastContainer
       position="top-left"
       autoClose={2000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
      /> */}
        </div>
    );
};

export default Cart;