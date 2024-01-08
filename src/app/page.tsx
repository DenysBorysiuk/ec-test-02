'use client';

import Card from '@/components/Card';
import Slide from '@/components/Slide';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <div className="container">
      <Slider slidesPerView={1} component={Card} data={[1, 2, 3]} />
      <hr />
      <Slider slidesPerView={2} component={Slide} data={[1, 2, 3]} />
    </div>
  );
}
