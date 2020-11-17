import {combineReducers} from 'redux';
import {useSelector,TypedUseSelectorHook} from 'react-redux';
import homeReducers from './homeReducers';


const rootReducer=combineReducers({
    homeState:homeReducers,
})

export type AppRootState=ReturnType<typeof rootReducer>;

export const useTypedSelector:TypedUseSelectorHook<AppRootState>=useSelector;

export default rootReducer;