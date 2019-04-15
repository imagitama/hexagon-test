import { createStore, combineReducers } from 'redux'
import calculator from './ducks/calculator/reducer'

const rootReducer = combineReducers({
  calculator
})

export const store = createStore(rootReducer)

// @ts-ignore
store.subscribe(() => console.log(store.getState()))

export type AppState = ReturnType<typeof rootReducer>