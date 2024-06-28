import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching reviews:', error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log(reviews);

    return (
        <div className="text-center">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className='space-y-4'>
                                <p className='ml-16 mr-16'>{review.review}</p>
                                <p>- {review.name}</p>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </Swiper>
        </div>
    );
};

export default Reviews;