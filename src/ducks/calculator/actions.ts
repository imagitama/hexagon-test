export const CHANGE_INPUT_TEXT = 'CHANGE_INPUT_TEXT'
export const changeInputText = (inputText: string) => ({
  type: CHANGE_INPUT_TEXT,
  payload: {
    inputText
  }
})
