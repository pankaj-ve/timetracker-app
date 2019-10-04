import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { signup } from './signup.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  signup
});

export default rootReducer;