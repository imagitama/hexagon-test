import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'

interface CalculatorInputProps {
  inputText: string
}

const getResultForInputText = (inputText: string) => inputText // todo: finish

const CalculatorOutput = ({ inputText }: CalculatorInputProps) => (
  <>
    The result: {getResultForInputText(inputText)}
  </>
)

const mapStateToProps = ({ calculator: { inputText } }: AppState) => ({ inputText })

export default connect(mapStateToProps)(CalculatorOutput)