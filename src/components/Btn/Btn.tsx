import { BtnProps } from './type';

const Btn = ({ section, direction }: BtnProps) => {
  return (
    <div className="hidden md:flex md:gap-[24px]">
      <button className={`button-${direction}-${section} bg-slate-500`} type="button">
        prev
      </button>
      <button className={`button-${direction}-${section} bg-slate-500`} type="button">
        next
      </button>
    </div>
  );
};

export default Btn;
