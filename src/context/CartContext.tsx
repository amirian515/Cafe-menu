import { createContext } from "react";
import type { Product } from "../componenets/home/ProductCard";

export type CartContextType = {
  cart: { product: Product; quantity: number }[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);