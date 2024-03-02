declare module '*.jpeg';
declare module '*.png';

type FoodProps = {
  imgUrl?: ImageSourcePropType;
  name: string;
  desc: string;
  color?: string;
};

type FoodList = {
  title: string;
  data: FoodProps[];
};
