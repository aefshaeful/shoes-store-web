import { useContext } from "react";
import { TotalPriceDispatch } from "../context/TotalPriceContext";

export function useTotalPriceDispatch() {
    return useContext(TotalPriceDispatch);
}