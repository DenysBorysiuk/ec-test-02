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
  return (
    <>
      <Swiper
        className={`${className} `}
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
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        <div className="hidden md:flex md:gap-[24px]">
          <button className={`button-prev-${section} bg-slate-500`} type="button">
            prev
          </button>
          <button className={`button-next-${section} bg-slate-500`} type="button">
            next
          </button>
        </div>

        {data?.map((item, idx) => (
          <SwiperSlide tag="li" key={idx} className={`${slideClassName}`}>
            <Component data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
