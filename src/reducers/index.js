import { combineReducers } from 'redux';
import { routerReducer as router } from 'redux-router-kit';
import form from './form';
import icoParameters from './icoParameters';
import icoState from './icoState';
import myStats from './myStats';

export default combineReducers({
  router,
  form,
  icoParameters,
  icoState,
  myStats,
});
