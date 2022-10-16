import {
  SELECTED_ITEM,SEARCH_FILTER
} from './actionTypes';

export const SelectedItem = (Item) => {
  return {
    type: SELECTED_ITEM,
    payload: Item,
  };
};
export const SearchFilter = (Item) => {
  return {
    type: SEARCH_FILTER,
    payload: Item,
  };
};