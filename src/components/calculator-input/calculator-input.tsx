import React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeInputText } from '../../ducks/calculator/actions'
import { AppState } from '../../store'
import TextInput from '../text-input/text-input'

interface CalculatorInputProps {
  inputText: string,
  changeInputText: (inputText: string) => void
}

export const CalculatorInput = ({ inputText, changeInputText }: CalculatorInputProps) => (
  <>
    Enter your number:
    <TextInput type="text" defaultValue={inputText} onChange={event => changeInputText(event.target.value)} />
  </>
)

export const mapStateToProps = ({ calculator: { inputText } }: AppState) => ({ inputText })

export const mapDispatchToProps: MapDispatchToProps<{ changeInputText: typeof changeInputText }, {}> = dispatch => bindActionCreators({ changeInputText }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorInput)