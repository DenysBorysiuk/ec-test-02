'use client';

import Card from '@/components/Card';
import Slide from '@/components/Slide';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <main className="">
      <section className="container mx-auto">
        {/* <h1>slider</h1> */}
        <Slider component={Card} data={[1, 2, 3, 4, 5, 6]} section="services" />
        <div className="my-[70px]" />
        <Slider
          component={Slide}
          data={[1, 2, 3, 4]}
          section="reviews"
          slideClassName="reviews-slide"
        />
        {/* <div className="my-[70px]" /> */}
        {/* <Slider component={Slide} data={[1, 2, 3, 4]} section="gallery" /> */}
      </section>
    </main>
  );
}
