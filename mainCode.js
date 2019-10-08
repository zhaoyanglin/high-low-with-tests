exports.highAndLow = (numbers) => {
    let newNumbers = numbers.split(" ")
    let max = Math.max(...newNumbers)
    let min = Math.min(...newNumbers)
    let answer = `${max} ${min}`
    return answer
  }