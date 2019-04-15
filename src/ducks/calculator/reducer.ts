import { Reducer } from 'redux'
import { CHANGE_INPUT_TEXT } from './actions'

interface DefaultState {
  inputText: string
}

const defaultState: DefaultState = {
  inputText: ''
}

const reducer: Reducer<DefaultState> = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload.inputText
      }

    default:
      return state
  }
}

export default reducer
