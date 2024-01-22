import React from 'react';
import { Helmet } from 'react-helmet-async';

const OurShop = () => {
    return (
        <div>
            <h3>This is Our Shop</h3>
            <Helmet>
                <title className='uppercase'>Our Shop</title>
            </Helmet>
        </div>
    );
};

export default OurShop;