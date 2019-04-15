import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import getResultForInputText from './formatter'

interface CalculatorInputProps {
  inputText: string
}

export const CalculatorOutput = ({ inputText }: CalculatorInputProps) => {
  if (!inputText) {
    return (
      <>
        Enter a number to calculate
      </>
    )
  }

  const parsedInputText = parseFloat(parseFloat(inputText).toFixed(2))

  if (isNaN(parsedInputText)) {
    return (
      <>
        Invalid input
      </>
    )
  }

  if (parsedInputText > 99999.99) {
    return (
      <>
        Cannot calculate that input (over 99999.99)
      </>
    )
  }

  let result = 'none'

  try {
    result = getResultForInputText(inputText)
  } catch (err) {
    console.error(err)

    return (
      <>
        Internal error
      </>
    )
  }

  return (
    <>
      The result: {result}
    </>
  )
}

export const mapStateToProps = ({ calculator: { inputText } }: AppState) => ({ inputText })

export default connect(mapStateToProps)(CalculatorOutput)