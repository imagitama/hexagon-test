import React from 'react'
import { Global } from '@emotion/core'
import globalStyles from './globalStyles'
import CalculatorInput from './components/calculator-input/calculator-input'
import CalculatorOutput from './components/calculator-output/calculator-output'

export default () => (
  <>
    <Global styles={globalStyles} />
    <h1>Number to words calculator</h1>
    <h2>Input</h2>
    <CalculatorInput />
    <h2>Output</h2>
    <CalculatorOutput />
  </>
)
