export interface CheckBoxCategroyTypesProps {
  heading?: string;
  number?: string;
  value?: string;
}

export interface FacilityCardTypesProps {
  srcImg?: string;
  heading?: string;
  para?: string;
}

export interface ProductCardTypesProps {
  className?: string;
  heartStyle?: string;
  id?: number | undefined;
  title?: string;
  price?: number;
  image?: string;
  onClick?: () => void;
}

export interface AddCartEyeTypesProps {
  className?: string;
}

export interface AddToCartBtnProps {
  id?: number;
  onClick?: (id: number) => void;
}

export interface ButtonPropsTypes {
  content?: string;
  className?: string;
  label?: string;
  category?: string;
  onClick?: (category?: string) => void;
}

export interface NumberCircleTypesProps {
  content?: string;
}

export interface CartItem {
  id: number;
}

export interface CartState {
  items: CartItem[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface FilterState {
  filteredProducts: Product[];
  selectedCategories: string[];
}

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ProductState {
  products: Products[];
  status: "idle" | "loading" | "failed" | "succeeded";
  error: null;
}
