// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductCard from './ProductCard';

// eslint-disable-next-line react/prop-types
const Products = ( { products } ) => {
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                    Products
                </h1>
                <span className=' w-24 h-1 bg-black' ></span>
                <p className=' w-[720px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur nihil officia quaerat esse! Fugit alias facilis unde, voluptates non fuga officiis exercitationem laboriosam enim? Consequuntur culpa optio error provident!</p>
            </div>
            <div className='max-w-screen-xl mx-auto py-10 grid sm:grid-cols-2 px-6 lg:grid-cols-3 xl:grid-cols-4  gap-10'>
             {
                // eslint-disable-next-line react/prop-types, no-unused-vars
                products.map( (item) => (
                   // eslint-disable-next-line react/jsx-key
                   <ProductCard key={item._id} product={item}/>
                ))
             }
            </div>
        </div>
    );
};

export default Products;