const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "Add To Saved Homes":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload }],
        
      };
      case "Remove From Saved Homes":
      return {
        ...state,
        wishlist: state.wishlist.filter((obj) => obj.id !== action.payload.id),
        
      };
      default:
        return state;

  }
};

export { WishlistReducer };
