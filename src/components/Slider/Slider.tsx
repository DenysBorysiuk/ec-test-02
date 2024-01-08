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
  const slidesPerView = section === 'reviews' ? 'auto' : 2;
  return (
    <>
      <Swiper
        className={`${className} `}
        updateOnWindowResize={true}
        wrapperTag="ul"
        loop={true}
        modules={[Navigation, Pagination]}
        speed={800}
        pagination={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            pagination: true,
            // pagination: {
            //   // el: '.swiper-pagination',
            //   // type: 'bullets',
            //   clickable: true,
            // },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
            pagination: false,
            navigation: {
              nextEl: `.button-next-${section}`,
              prevEl: `.button-prev-${section}`,
            },
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}

        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={swiper => console.log(swiper)}
      >
        {data?.map((item, idx) => (
          <SwiperSlide tag="li" key={idx} className={`${slideClassName}`}>
            <Component data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-[24px] z-10">
        <button className={`button-prev-${section} bg-slate-500`} type="button">
          prev
        </button>
        <button className={`button-next-${section} bg-slate-500`} type="button">
          next
        </button>
      </div>
    </>
  );
};

export default Slider;
