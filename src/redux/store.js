import { createStore } from 'redux';
import taskReducer from './reducer';

// Store de Redux clásico
const store = createStore(taskReducer);
export default store;
