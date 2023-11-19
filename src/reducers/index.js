import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import mandirReducer from './mandirReducer'

const rootReducer = combineReducers({
    mandir: mandirReducer,
    reducer: routerReducer
})
export default rootReducer

