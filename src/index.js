module.exports = function toReadable (number) {
    switch (number.toString().length) {
        case 1:
            return oneSymbol(number)
        case 2:
            return twoSymbol(number)
        case 3:
            return threeSymbol(number)
        default:
        break
    }
}

function oneSymbol(number) {
    const numeral = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let result = numeral[number]
    return result
}

function twoSymbol(number) {
    const ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const firstSymbol = number.toString()[0]
    const secondSymbol = number.toString()[1]
    let result = 0
    if (firstSymbol === '1') {
        result = ten[secondSymbol]
    } else if (secondSymbol !== '0') {
        result = `${tens[firstSymbol - 2]} ${oneSymbol(secondSymbol)}`
    } else {
        result = tens[firstSymbol - 2]
    }
    return result
}

function threeSymbol(number) {
    const firstSymbol = number.toString()[0]
    const secondSymbol = number.toString()[1]
    const thirdSymbol = number.toString()[2]
    let result = 0
    if (secondSymbol === '0' && thirdSymbol === '0') {
        result = oneSymbol(firstSymbol) + ' hundred'
    } else if (secondSymbol === '0') {
        result = oneSymbol(firstSymbol) + ' hundred ' + oneSymbol(thirdSymbol)
    } else {
        result = oneSymbol(firstSymbol) + ' hundred ' + twoSymbol(secondSymbol + thirdSymbol)
    }
    return result
}
