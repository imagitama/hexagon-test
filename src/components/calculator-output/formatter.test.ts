import formatter from './formatter'

const inputsAndExpectedOutputs = [
  ['123.456', 'ONE HUNDRED AND TWENTY THREE DOLLARS AND FORTY SIX CENTS'],
]

describe('Formatter function', () => {
  inputsAndExpectedOutputs.forEach(([input, expectedOutput]) => 
    describe(`When called with input ${input}`, () => {
      it(`Returns expected output ${expectedOutput}`, () => {
        expect(formatter(input)).toBe(expectedOutput)
      })
    })
  )
})
