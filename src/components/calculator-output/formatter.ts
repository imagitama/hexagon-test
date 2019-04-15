const tensNames = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const teenNames = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

const digitNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

// eg. "1" as "one" or "9" as "nine"
const getSingleDigitAsWord = (singleDigit: string) => digitNames[parseInt(singleDigit) - 1]

// eg. "12" as "twelve" or "35" as "thirty five"
const getTwoDigitsAsWord = (twoDigits: string) => {
  const firstDigit = twoDigits[0]
  const secondDigit = twoDigits[1]

  if (firstDigit === '0') {
    return getSingleDigitAsWord(secondDigit)
  }

  const parsedTwoDigits = parseInt(twoDigits)

  if (parsedTwoDigits < 20) {
    return teenNames[parsedTwoDigits - 10]
  }

  return `${tensNames[parseInt(firstDigit) - 1]}${secondDigit !== '0' ? ` ${getSingleDigitAsWord(secondDigit)}` : ''}`
}

// eg. "100" as "one hundred" or "311" as "three hundred and eleven"
const getThreeDigitsAsWord = (threeDigits: string) => {
  const firstDigit = threeDigits[0]
  return `${getSingleDigitAsWord(firstDigit)} hundred and ${getTwoDigitsAsWord(threeDigits.slice(1))}`
}

// eg. "5000" as "five thousand" or "1234" as "one thousand two hundred and thirty four"
const getFourDigitsAsWord = (fourDigits: string) => {
  const firstDigit = fourDigits[0]
  return `${getSingleDigitAsWord(firstDigit)} thousand and ${getThreeDigitsAsWord(fourDigits.slice(1))}`
}

// eg. "20000" as "twenty thousand" or "12345" as "twelve thousand three hundred and fourty five"
const getFiveDigitsAsWord = (fiveDigits: string) => {
  return `${getTwoDigitsAsWord(fiveDigits.slice(0, 2))} thousand and ${getThreeDigitsAsWord(fiveDigits.slice(2))}`
}

export default (inputText: string) => {
  const inputRounded = parseFloat(inputText).toFixed(2)

  const chunks = inputRounded.toString().split('.')
  const dollarChunks = chunks[0].split('')
  let centChunks = chunks[1].split('')

  let result = ''

  if (dollarChunks.length === 5) {
    result = getFiveDigitsAsWord(dollarChunks.join(''))
  } else if (dollarChunks.length === 4) {
    result = getFourDigitsAsWord(dollarChunks.join(''))
  } else if (dollarChunks.length === 3) {
    result = getThreeDigitsAsWord(dollarChunks.join(''))
  } else if (dollarChunks.length === 2) {
    result = getTwoDigitsAsWord(dollarChunks.join(''))
  } else if (dollarChunks.length === 1 && dollarChunks[0] !== '0') {
    result = getSingleDigitAsWord(dollarChunks.join(''))
  }

  const isNotOnlyCents = dollarChunks.length > 1 || dollarChunks.length === 1 && dollarChunks[0] !== '0'

  if (isNotOnlyCents) {
    if (dollarChunks.length === 1 && dollarChunks[0] === '1') {
      result += ' DOLLAR'
    } else {
      result += ' DOLLARS'
    }
  }

  if (centChunks.join('') === '00') {
    return result.toUpperCase()
  }

  if (isNotOnlyCents) {
    result += ' AND '
  }

  if (centChunks.length === 2) {
    result += getTwoDigitsAsWord(centChunks.join(''))
  } else if (centChunks.length === 1) {
    result += getSingleDigitAsWord(centChunks.join(''))
  }

  if (centChunks.join('') === '01') {
    result += ' CENT'
  } else {
    result += ' CENTS'
  }

  return result.toUpperCase()
}