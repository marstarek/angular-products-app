import {
  addToWishlist,
  removingItem,
  WishlistActions,
} from './wishlist.action';

const initValues = {
  counter: 0,
  item: [],
};
let clicked = false;
let updatedItems = [];
export function wishlistReducer(state = initValues, action: WishlistActions) {
  switch (action.type) {
    case addToWishlist:
      state.item.map((it) => {
        if (it.id === action.payload.item.id) clicked = true;
      });
      if (clicked) {
        clicked = false;
        return state;
      } else
        return {
          counter: action.payload.counter,
          item: [...state.item, action.payload.item],
        };
    case removingItem:
      updatedItems = state.item.filter((it) => {
        return it.id != action.payload;
      });
      return {
        counter: state.counter - 1,
        item: updatedItems,
      };
    default:
      return state;
  }
}
