import { Action } from '@ngrx/store';

export const addToWishlist = 'INCREASE_COUNTER';

export class ADDING_ITEM implements Action {
  readonly type = addToWishlist;
  constructor(public payload: any) {}
}
export const removingItem = 'DECREASE_COUNTER';
export class REMOVE_FROM_WISHLIST implements Action {
  readonly type = removingItem;
  constructor(public payload: any) {}
}
export type WishlistActions = ADDING_ITEM | REMOVE_FROM_WISHLIST;
