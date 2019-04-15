import React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeInputText } from '../../ducks/calculator/actions'
import { AppState } from '../../store'

interface CalculatorInputProps {
  inputText: string,
  changeInputText: (inputText: string) => void
}

const CalculatorInput = ({ inputText, changeInputText }: CalculatorInputProps) => (
  <>
    Enter your number:
    <input type="text" defaultValue={inputText} onChange={event => changeInputText(event.target.value)} />
  </>
)

const mapStateToProps = ({ calculator: { inputText } }: AppState) => ({ inputText })

const mapDispatchToProps: MapDispatchToProps<{ changeInputText: typeof changeInputText }, {}> = dispatch => bindActionCreators({ changeInputText }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorInput)