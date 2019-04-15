import formatter from './formatter'

const inputsAndExpectedOutputs = [
  // Original scenario - round up
  ['123.456', 'ONE HUNDRED AND TWENTY THREE DOLLARS AND FORTY SIX CENTS'],

  // Round down
  ['987.654', 'NINE HUNDRED AND EIGHTY SEVEN DOLLARS AND SIXTY FIVE CENTS'],

  // Two digits for dollars and double 0s for cents
  ['10.00', 'TEN DOLLARS'],

  // Single digit for dollars and single digit for cents
  ['5.1', 'FIVE DOLLARS AND TEN CENTS']
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
