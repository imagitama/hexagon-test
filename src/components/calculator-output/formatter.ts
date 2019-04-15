const numerals = {
  million: 'million',
  thousand: 'thousand',
  hundred: 'hundred'
}

const AND = 'AND'
const DOLLAR = 'DOLLAR'
const DOLLARS = 'DOLLARS'
const CENT = 'CENT'
const CENTS = 'CENTS'

const tensNames = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const teenNames = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

const digitNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

export default (inputText: string) => {
  const inputRounded = parseFloat(inputText).toFixed(2)

  const chunks = inputRounded.toString().split('.')
  const dollarChunks = chunks[0].split('')
  const centChunks = chunks[1].split('')

  let result: string[] = []

  const parseHundreds = (digits: string[]) => {
    let result: string[] = []

    digits.forEach((digit, idx) => {
      if (idx === 0) {
        result.push(digitNames[parseInt(digit) - 1])
        result.push(numerals.hundred)
        return
      }

      if (idx === 1) {
        result.push(AND)
        result.push(tensNames[parseInt(digit) - 1])
        return
      }

      if (idx === 2) {
        result.push(digitNames[parseInt(digit) - 1])
        result.push(DOLLARS)
        return
      }
    })

    return result
  }

  dollarChunks.forEach((digit, idx) => {
    // single thousands
    if (dollarChunks.length === 4) {
      if (idx === 0) {
        result.push(digitNames[parseInt(digit) - 1])
        result.push(numerals.thousand)
        return
      } else if (idx === 1) {
        result.push(AND)
        result = result.concat(parseHundreds(dollarChunks.slice(1)))
      }
    }

    // double thousands
    if (dollarChunks.length === 5) {
      if (idx === 0) {
        result.push(tensNames[parseInt(digit) - 1])
        return
      } else if (idx === 1) {
        result.push(digitNames[parseInt(digit) - 1])
        result.push(numerals.thousand)
        return
      } else if (idx === 2) {
        result.push(AND)
        result = result.concat(parseHundreds(dollarChunks.slice(2)))
      }
    }

    if (dollarChunks.length === 1) {
      result.push(digitNames[parseInt(digit) - 1])

      if (digit === '1') {
        result.push(DOLLAR)
      } else {
        result.push(DOLLARS)
      }
      return
    }

    if (idx === 0 && dollarChunks.length === 2) {
      result.push(teenNames[parseInt(digit) - 1])
      result.push(DOLLARS)
      return
    }

    if (idx === 0 && dollarChunks.length === 3) {
      result = result.concat(parseHundreds(dollarChunks))
    }
  })

  centChunks.forEach((digit, idx) => {
    if (centChunks[0] === '0' && centChunks[1] === '0') {
      return
    }

    if (idx === 0) {
      result.push(AND)

      if (digit !== '0') {
        result.push(tensNames[parseInt(digit) - 1])
      }

      if (centChunks[1] === '0') {
        result.push(CENTS)
      }

      return
    }

    if (idx === 1 && digit !== '0') {
      result.push(digitNames[parseInt(digit) - 1])

      if (digit === '1' && centChunks[0] === '0') {
        result.push(CENT)
      } else {
        result.push(CENTS)
      }

      return
    }
  })



  return result.join(' ').toUpperCase()
}