import { useContext } from "react";
import { TotalPrice } from "../context/TotalPriceContext";

export function useTotalPrice() {
    return useContext(TotalPrice);
}