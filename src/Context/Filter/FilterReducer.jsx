const FilterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE":
      return { ...state, price: action.payload };
      case "DATE":
      return { ...state, date: action.payload };
      case "HOUSE":
        return { ...state, house: [...state.house, action.payload] };
    default:
      return state;
  }
};

export { FilterReducer };
