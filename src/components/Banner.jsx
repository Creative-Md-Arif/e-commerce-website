import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";


const Banner = () => {
    const [ currentSlide , setCurrentSlide] = useState(0)

 const data = [
    "https://icms-image.slatic.net/images/ims-web/dc653abd-b7a3-4fca-8763-ec643ca620df.jpg_1200x1200.jpg",
    "https://icms-image.slatic.net/images/ims-web/fd9e3361-3786-4238-aadf-3e08a9f30f03.jpg",
    "https://icms-image.slatic.net/images/ims-web/4601e3fc-db8f-4f5e-bb92-0cca631923af.jpg",
    "https://icms-image.slatic.net/images/ims-web/f268538b-8c9f-4fd1-a6c0-f9103353e5ae.jpg",
 ];

const prevSlide=()=>{
setCurrentSlide(currentSlide === 0?3:(prev)=>prev-1);
};

const nextSlide=()=>{
    setCurrentSlide(currentSlide === 3 ? 0: (prev) => prev + 1);
};
    
  return (

         <div className=" w-full h-auto overflow-x-hidden">
            <div className=" w-screen max-h-[140px] bg-center bg-cover sm:max-h-[220px] md:max-h-[280px] lg:max-h-[400px] xl:max-h-[500px] 2xl:max-h-[650px] relative ">
                <div style={{ transform: `translateX(-${currentSlide * 100}vw)`}}
                   className=" w-[400vw] h-full flex transition-transform duration-1000 ">
                    <img className=" w-screen h-full object-cover"
                    src={data[0]} alt="ImgOne"
                    loading="priority"
                    />

                    <img className=" w-screen h-full object-cover"
                    src={data[1]} alt="ImgOne"
                    loading="priority"
                    />

                    <img className=" w-screen h-full object-cover"
                    src={data[2]} alt="ImgOne"
                    loading="priority"
                    />

                    <img className=" w-screen h-full object-cover"
                    src={data[3]} alt="ImgOne"
                    loading="priority"
                    />
                </div>
                <div className=" absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-2 sm:bottom-3">
                    <div onClick={prevSlide} className="  lg:w-14 lg:h-12 border-[1px] border-black flex items-center justify-center hover:cursor-pointer hover:bg-slate-700 hover:text-white active:bg-gray-900 duration-300">
                        <GoArrowLeft />
                    </div>
                    <div onClick={nextSlide}  className=" lg:w-14 lg:h-12 border-[1px] border-black flex items-center justify-center hover:cursor-pointer hover:bg-slate-700 hover:text-white active:bg-gray-900 duration-300">
                        <GoArrowRight />
                    </div>
                </div>
            </div>
         </div>

  );

  
};

export default Banner;
