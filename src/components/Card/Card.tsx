import { CardProps } from './type';

const Card = ({ data }: CardProps) => {
  return (
    <div className="bg-cyan-700 h-[200px]">
      <span>{data}</span>
    </div>
  );
};

export default Card;
