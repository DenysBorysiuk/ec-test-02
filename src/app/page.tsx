'use client';

import Btn from '@/components/Btn';
import Card from '@/components/Card';
import Slide from '@/components/Slide';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <main className="">
      <section className="mx-auto container">
        <h1>slider</h1>
        <Btn section="services" direction="prev" />
        <Btn section="services" direction="next" />
        <Slider component={Card} data={[1, 2, 3, 4, 5, 6]} section="services" />

        <div className="py-[50px]" />

        <Btn section="reviews" direction="prev" />
        <Btn section="reviews" direction="next" />

        <Slider
          component={Slide}
          data={[1, 2, 3, 4]}
          section="reviews"
          slideClassName="reviews-slide"
        />
      </section>
    </main>
  );
}
