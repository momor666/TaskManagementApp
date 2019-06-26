import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '../RootNavigator';
import authReducer from './authReducer';
import userReducer from './userReducer';
import projectReducer from './projectReducer';
import taskReducer from './taskReducer';
import invitationReducer from './invitationReducer';

const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  nav: navReducer,
  auth: authReducer,
  user: userReducer,
  projects: projectReducer,
  tasks: taskReducer,
  invitations: invitationReducer,
});

export default rootReducer;
