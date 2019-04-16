import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import getResultForInputText, { OutOfBoundsError, InvalidInputError } from './formatter'

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

  let result = ''

  try {
    result = getResultForInputText(inputText)
  } catch (err) {
    if (err instanceof OutOfBoundsError) {
      return (
        <>
          Cannot calculate that input (over 99999.99 or less than 0)
        </>
      )
    }

    if (err instanceof InvalidInputError) {
      return (
        <>
          Invalid input
        </>
      )
    }

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