import React from 'react';

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 space-x-2'>
                <img style={{ borderRadius: '0 200px 200px 200px ' }} className='w-[120px]' src={image} alt="" />
                <div>
                    <h3 className='uppercase text-2xl font-semibold'>{name}</h3>
                    <p>{recipe}</p>

                </div>
                <p className='text-yellow-500'>${price}</p>
                
            </div>
            
        </div>
    );
};

export default MenuItem;