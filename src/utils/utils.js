export class StringCalculator {
  static add(str) {
    try {
      if (str == "") return 0  // return 0 if empty string
      const strArray = this.formatString(str)
      const result = strArray.reduce((num1, num2) => parseFloat(num1) + parseFloat(num2), 0) // addition of numbers in array

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  static formatString(str) {
    let currentChar = ""
    let result = []
    let negativeNumbers = []
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (char >= "0" && char <= "9" || char === '-') {
        currentChar += char
      } else {
        if (currentChar) {
          if (currentChar[0] === '-') {
            negativeNumbers.push(parseFloat(currentChar))
          } else {
            result.push(parseFloat(currentChar))
          }
          currentChar = ""
        }
      }
    }
  
    if (currentChar) {
      if (currentChar[0] === '-') {
        negativeNumbers.push(parseFloat(currentChar))
      } else {
        result.push(parseFloat(currentChar))
      }
    }

    if(negativeNumbers.length > 0){
      throw new Error(`Negative numbers are not allowed ${negativeNumbers.toString()}`)
    }
  
    return result
  }
}