

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";



import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic4 from '../assets/pic4.jpg';

const Projects = () => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <div className='projects' id="projects">
      <div className="wrapper">
        <h2 className='projects__title'>
          Галерея проектов
        </h2>

        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        >
          <SwiperSlide><img src={pic1}/></SwiperSlide>
          <SwiperSlide><img src={pic2}/></SwiperSlide>
          <SwiperSlide><img src={pic4}/></SwiperSlide>

          <SwiperSlide><img src={pic1}/></SwiperSlide>
          <SwiperSlide><img src={pic2}/></SwiperSlide>
          <SwiperSlide><img src={pic4}/></SwiperSlide>
        </Swiper>

      </div>
    </div>
  )
}

export default Projects