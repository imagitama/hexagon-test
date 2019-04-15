import { createStore, combineReducers } from 'redux'
import calculator from './ducks/calculator/reducer'

const rootReducer = combineReducers({
  calculator
})

export const store = createStore(rootReducer)

export type AppState = ReturnType<typeof rootReducer>