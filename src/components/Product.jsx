/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addToCart } from "../assets/redux/EcommerceSlice";
import { ToastContainer , toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch()
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState (1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex flex-col px-5 md:flex-row gap-10">
        <div className="w-full md:w-[40%] relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          />
          <div className=" absolute top-4 right-0">
            {details.isNew && (
              <p className=" bg-black text-white font-semibold font-titleFont px-6 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className=" w-full md:w-[60%] flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-[40px] font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className=" line-through font-base text-gray-500">
                ${details.oldPrice}
              </p>
              <p className=" text-[24px] font-base text-gray-500">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
            <p className=" text-xs text-gray-500"> ( 1 Customer review )</p>
          </div>
          <p className=" text-base md:w-[400px] lg:w-[550px] text-gray-500 -mt-3">
            {details.description}
          </p>
          <div className=" flex flex-col sm:flex-row gap-4">
            <div className=" w-full flex sm:w-52 items-center justify-between text-gray-500 gap-4 border p-3">
              <p>Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button onClick={ () =>
                 setBaseQty(baseQty === 1 ? baseQty =1:baseQty-1)}
                 className=" border h-5 font-normal text-xl flex items-center justify-center px-2  hover:bg-red-400 hover:text-white cursor-pointer duration-300 active:bg-black">
                 -
                </button>
                <span>{baseQty}</span>
                <button onClick={ () => setBaseQty(baseQty + 1)}
                 className=" border h-5 font-normal text-xl flex items-center justify-center px-2 hover:bg-red-400  hover:text-white cursor-pointer duration-300 active:bg-black">
                 +
                </button>
              </div>
            </div>
            <button
             onClick={() => 
              dispatch(
                addToCart({
                        _id: details._id,
                        title: details.title,
                        image: details.image,
                        price: details.price,
                        quantity: baseQty,
                        description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
             className="bg-red-700 text-white py-3 px-6 active:bg-black">
              add to cart
            </button>
          </div>
          <p className=" text-base text-gray-900"> 
           Category: {""}
          <span className=" font-medium capitalize">{details.category}</span> </p> 
        </div>
      </div>
      <ToastContainer
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
      />
    </div>
  );
};

export default Product;
