const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "Add To Saved Homes":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload }],
        
      };
      default:
        return state;

  }
};

export { WishlistReducer };
