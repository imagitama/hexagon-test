import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import getResultForInputText from './formatter'

interface CalculatorInputProps {
  inputText: string
}

const CalculatorOutput = ({ inputText }: CalculatorInputProps) => (
  <>
    The result: {getResultForInputText(inputText)}
  </>
)

const mapStateToProps = ({ calculator: { inputText } }: AppState) => ({ inputText })

export default connect(mapStateToProps)(CalculatorOutput)