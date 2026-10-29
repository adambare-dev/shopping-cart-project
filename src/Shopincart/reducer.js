function reducer(state, action) {
  switch (action.type) {
    case "ADD-TO-CART": {
      const existingItem = state.carts.find((c) => c.id === action.payLoad.id);
      if (existingItem) {
        return {
          ...state,
          carts: state.carts.map((c) =>
            c.id === action.payLoad.id ? { ...c, quantity: c.quantity + 1 } : c,
          ),
        };
      }
      return { ...state, carts: [...state.carts, action.payLoad] };
    }
    case "INCREMENT-QUANTITY":
      return {
        ...state,
        carts: state.carts.map((c) =>
          c.id === action.payLoad.id ? { ...c, quantity: c.quantity + 1 } : c,
        ),
      };
    case "DECREMENT-QUANTITY": {
      const existedItem = state.carts.find((i) => i.id === action.payLoad.id);
      if (existedItem.quantity === 1) {
        return {
          ...state,
          carts: state.carts.filter((i) => i.id !== action.payLoad.id),
        };
      }
      return {
        ...state,
        carts: state.carts.map((c) =>
          c.id === action.payLoad.id ? { ...c, quantity: c.quantity - 1 } : c,
        ),
      };
    }
    case "Delete_Item":
      return {
        ...state,
        carts: state.carts.filter((i) => i.id !== action.payLoad),
      };

    default:
      return state; // <-- Fix 1: Return state by default so it never returns undefined
  }
}
export default reducer;
