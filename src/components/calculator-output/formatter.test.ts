import formatter from './formatter'

const inputsAndExpectedOutputs = [
  ['123.456', 'ONE HUNDRED AND TWENTY THREE DOLLARS AND FORTY SIX CENTS'],
  ['987.654', 'NINE HUNDRED AND EIGHTY SEVEN DOLLARS AND SIXTY FIVE CENTS'],
  ['10.00', 'TEN DOLLARS'],
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
