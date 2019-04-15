import reducer from './reducer'
import { changeInputText } from './actions'

describe('Calculator reducer', () => {
  describe('When called with no state and no action', () => {
    it('Returns the default state', () => {
      expect(reducer()).toEqual({
        inputText: ''
      })
    })
  })

  describe('When called with any state and CHANGE_INPUT_TEXT', () => {
    it('Returns the provided state plus the new input text', () => {
      expect(reducer({ someState: true }, changeInputText('Hello world!'))).toEqual({
        someState: true,
        inputText: 'Hello world!'
      })
    })
  })
})