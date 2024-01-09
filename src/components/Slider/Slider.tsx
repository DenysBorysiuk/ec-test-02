'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SliderProps } from './type';

const Slider = ({
  className = '',
  slideClassName = '',
  data,
  component: Component,
  section,
}: SliderProps) => {
  const spaceBetweenXl = section === 'reviews' ? 26 : 24;

  return (
    <Swiper
      className={`${className}`}
      updateOnWindowResize={true}
      wrapperTag="ul"
      loop={true}
      modules={[Navigation, Pagination]}
      speed={800}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: `.button-next-${section}`,
        prevEl: `.button-prev-${section}`,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
          grabCursor: false,
          allowTouchMove: false,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: spaceBetweenXl,
        },
      }}
    >
      {data?.map((item, idx) => (
        <SwiperSlide tag="li" key={idx} className={`overflow-hidden ${slideClassName}`}>
          <Component data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
