import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './styles.css';

const slides = ['https://images.pexels.com/photos/1064136/pexels-photo-1064136.jpeg', 'https://images.pexels.com/photos/1115251/pexels-photo-1115251.jpeg', 'https://images.pexels.com/photos/2104568/pexels-photo-2104568.jpeg', 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg'];

export const Carousel = () => (

    <Swiper centeredSlides={true} slidesPerView="auto" pagination={{ clickable: true, }} effect={'coverflow'} loop={true} navigation={true} coverflowEffect={{
        rotate : 50,
        stretch : 0,
        depth : 100,
        modifier : 1,
        slideShadows : true
    }} modules={[EffectCoverflow, Pagination, Navigation]}>
        <div className='swiper-wrapper'>
            {
                slides.map((slide, index) => (
                    <SwiperSlide style={{backgroundImage : `url(${slide})`, }} 
                    />
                ))
            }
        </div>
    </Swiper>

);

export default Carousel;