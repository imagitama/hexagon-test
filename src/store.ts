import { createStore, combineReducers } from 'redux'
import calculator from './ducks/calculator/reducer'

export default () => createStore(combineReducers({
  calculator
}))
