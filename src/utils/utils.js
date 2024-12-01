export class StringCalculator {
  static add(str) {
    try {
      if (str == "") return 0  // return 0 if empty string
      const strArray = this.formatString(str)
      const result = strArray.reduce((num1, num2) => parseFloat(num1) + parseFloat(num2), 0) // addition of numbers in array

      return result
    } catch (error) {
      console.log(error)
    }
  }

  static formatString(str) {
    let currentChar = ""
    let result = []

    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (char >= "0" && char <= "9") {
        currentChar += char
      } else {
        if (currentChar) {
          result.push(parseFloat(currentChar))
          currentChar = ""
        }
      }
    }

    if (currentChar) {
      result.push(parseFloat(currentChar))
      currentChar = ""
    }

    return result
  }
}