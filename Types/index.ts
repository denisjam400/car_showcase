import { MouseEventHandler } from "react";

export interface CustomButtonProp {
  buttonDisable?: boolean;
  linkNav?: string;
  textStyles?: string;
  rightIcon?: string;
  btnType?: "button" | "submit";
  title?: string;
  containerStyles?: string;
  // handleClick?: MouseEventHandler<HTMLButtonElement>;
  handleClick?: any;
}

export interface SearchManufactererProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
