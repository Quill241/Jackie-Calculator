

// const savebtn = document.getElementById(save-num)

function add() {
    const firstNum = document.getElementById("num1")
    const secondNum = document.getElementById("num2")
    const output = document.getElementById("output")

    const firstActualNumber = parseInt(firstNum.value)
    const secondActualNumber = parseInt(secondNum.value)

    let finalAnswer = firstActualNumber + secondActualNumber

    console.log(finalAnswer)

    output.textContent = finalAnswer.toString()
    return finalAnswer

}

function subtract() {
    const firstNum = document.getElementById("num1")
    const secondNum = document.getElementById("num2")
    const output = document.getElementById("output")

    const firstActualNumber = parseInt(firstNum.value)
    const secondActualNumber = parseInt(secondNum.value)

    let finalAnswer = firstActualNumber - secondActualNumber

    console.log(finalAnswer)

    output.textContent = finalAnswer.toString()
    return finalAnswer

}


function divide() {
    const firstNum = document.getElementById("num1")
    const secondNum = document.getElementById("num2")
    const output = document.getElementById("output")

    const firstActualNumber = parseInt(firstNum.value)
    const secondActualNumber = parseInt(secondNum.value)

    let finalAnswer = firstActualNumber / secondActualNumber

    console.log(finalAnswer)

    output.textContent = finalAnswer.toString()
    return finalAnswer

}


function Multiply() {
    const firstNum = document.getElementById("num1")
    const secondNum = document.getElementById("num2")
    const output = document.getElementById("output")

    const firstActualNumber = parseInt(firstNum.value)
    const secondActualNumber = parseInt(secondNum.value)

    let finalAnswer = firstActualNumber * secondActualNumber

    console.log(finalAnswer)

    output.textContent = finalAnswer.toString()
    return finalAnswer

}

function modulo() {
    const firstNum = document.getElementById("num1")
    const secondNum = document.getElementById("num2")
    const output = document.getElementById("output")

    const firstActualNumber = parseInt(firstNum.value)
    const secondActualNumber = parseInt(secondNum.value)

    let finalAnswer = firstActualNumber % secondActualNumber

    console.log(finalAnswer)

    output.textContent = finalAnswer.toString()
    return finalAnswer

}

function darkMode() {
    document.body.style.background = '#a04848ba'
}