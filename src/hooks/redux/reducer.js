import {
  SEARCH_FILTER,
  SELECTED_ITEM,
} from './actionTypes';

const SelectedItemInitialState = {
  Item: [],
}

const SearchFilterInitialState = {
  SearchFilterSelected: {},
}

export const SelectedItemReducer = (
  state = SelectedItemInitialState,
  action,
) => {
  switch (action.type) {
    case SELECTED_ITEM:
      const payload = action.payload;
      return {
        ...state,
        Item: state.Item.concat(payload),
      };
    default:
      return state;
  }
};

export const SearchFilterReducer = (
  state = SearchFilterInitialState,
  action,
) => {
  switch (action.type) {
    case SEARCH_FILTER:
      const payload = action.payload;
      return {
        ...state,
        SearchFilterSelected: payload,
      };
    default:
      return state;
  }
};