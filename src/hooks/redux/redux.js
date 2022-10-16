import {createStore, combineReducers} from 'redux';
import {
  SelectedItemReducer,SearchFilterReducer
} from './reducer';

const reducer = combineReducers({
  Item: SelectedItemReducer,
  selectedOptions : SearchFilterReducer
});

const store = createStore(reducer);

export default store;
