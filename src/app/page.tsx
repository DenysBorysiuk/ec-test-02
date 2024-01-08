'use client';

import Card from '@/components/Card';
import Slide from '@/components/Slide';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <main className="">
      <section className="mx-auto container">
        <h1>slider</h1>

        <Slider component={Card} data={[1, 2, 3, 4, 5, 6]} section="services" />

        <div className="py-[50px]" />

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
