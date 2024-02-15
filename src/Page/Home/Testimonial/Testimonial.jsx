import React, { useEffect, useState } from 'react';
import SectionTilte from '../../Shared/sectionTitle/SectionTilte';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [review, setReview] = useState([])
    console.log(review)
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <SectionTilte
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTilte>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(item => <SwiperSlide
                            key={item._id}
                        >
                            <div className='flex flex-col items-center my-8 md:my-16 mx-4 md:mx-32'>
                               <div>
                               <Rating
                                    style={{ maxWidth: 180 }}
                                    value={item.rating}
                                    readOnly
                                />
                               </div>
                                <p className='my-4 text-sm md:text-base md:my-8'>{item.details}</p>
                                <h3 className='text-orange-400 text-lg md:text-2xl text-center'>{item.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;