'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SliderProps } from './type';

const Slider = ({
  direction = 'horizontal',
  slidesPerView,
  pagination = false,
  navigation = false,
  data,
  className = '',
  component: Component,
}: SliderProps) => {
  return (
    <Swiper
      wrapperTag="ul"
      loop
      modules={[Navigation, Pagination]}
      direction={direction}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={swiper => console.log(swiper)}
      className={`${className}`}
    >
      {data?.map((item, idx) => (
        <SwiperSlide tag="li" key={idx}>
          <Component data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
