import { combineReducers } from 'redux';
import filters from './filters';
import pizzas from './pizza';
import cart from './cart';

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
});

export default rootReducer;
