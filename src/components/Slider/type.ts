export type SliderProps = {
  direction?: 'horizontal' | 'vertical';
  slidesPerView: number;
  pagination?: boolean;
  navigation?: boolean;
  data: any[];
  className?: string;
  component: any;
};
