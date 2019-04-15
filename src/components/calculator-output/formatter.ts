const numerals = {
  million: 'million',
  thousand: 'thousand',
  hundred: 'hundred'
}

const AND = 'AND'
const DOLLARS = 'DOLLARS'
const CENTS = 'CENTS'

const tensNames = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

// const teenNames = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

const digitNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

export default (inputText: string) => {
  const inputRounded = parseFloat(inputText).toFixed(2)

  const chunks = inputRounded.toString().split('.')
  const dollarChunks = chunks[0].split('')
  const centChunks = chunks[1].split('')

  let result: string[] = []

  dollarChunks.forEach((digit, idx) => {
    if (dollarChunks.length === 1) {
      result.push(digitNames[parseInt(digit) - 1])
      return
    }

    if (idx === 0 && dollarChunks.length === 3) {
      result.push(digitNames[parseInt(digit) - 1])
      result.push(numerals.hundred)
      return
    }

    if (idx === 1 && dollarChunks.length === 3) {
      result.push(AND)
      result.push(tensNames[parseInt(digit) - 2])
      return
    }

    if (idx === 2 && dollarChunks.length === 3) {
      result.push(digitNames[parseInt(digit) - 1])
      result.push(DOLLARS)
      return
    }
  })

  centChunks.forEach((digit, idx) => {
    if (idx === 0) {
      result.push(AND)
      result.push(tensNames[parseInt(digit) - 2])
      return
    }

    if (idx === 1) {
      result.push(digitNames[parseInt(digit) - 1])
      result.push(CENTS)
      return
    }
  })



  return result.join(' ').toUpperCase()
}