import { SlideProps } from './type';

const Slide = ({ data }: SlideProps) => {
  return (
    <div className=" bg-lime-500 h-[200px]">
      <span>{data}</span>
    </div>
  );
};

export default Slide;
