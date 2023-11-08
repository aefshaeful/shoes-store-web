import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// context untuk menyimpan state global
const TotalPriceContext = createContext();

// context untuk menyimpan action
const TotalPriceContextDispatch = createContext();

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOTAL_PRICE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error(`Unknow action type: ${action.type}`);
    }
  }
};

export function TotalPriceContextProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceContextDispatch.Provider value={dispatch}>
        {children}
      </TotalPriceContextDispatch.Provider>
    </TotalPriceContext.Provider>
  );
}

TotalPriceContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TotalPrice = TotalPriceContext;
export const TotalPriceDispatch = TotalPriceContextDispatch;
