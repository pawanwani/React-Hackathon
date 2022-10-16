import { SelectedItem,SearchFilter } from '../redux/actions';

export function SetSelectedItem(dispatch, Item) {
  dispatch(SelectedItem(Item));
}

export function SetSearchOptions(dispatch, Item) {
  dispatch(SearchFilter(Item));
}
