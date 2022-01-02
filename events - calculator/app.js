let currentInput = "0"
let accumulator = 0
let result = 0
let operator = null

const display = document.querySelector(".output")

const numberBtns = document.querySelectorAll(".button-number")
const actionBtns = document.querySelectorAll(".button-action")

display.value = currentInput

numberBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        if(currentInput === "0") {
            currentInput = btn.dataset.number
        } else {
            currentInput += btn.dataset.number
        }

        display.value = currentInput
    })
})

actionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const action = btn.dataset.action

        switch(action) {
            case "+":
                accumulator = Number(currentInput)
                currentInput = "0"
                display.value = currentInput
                operator = "+"
                break;
            case "=":
                if(operator === "+") {
                    result = accumulator + Number(currentInput)
                }

                display.value = `Answer = ${result}`
                currentInput = "0"
                operator = null
                accumulator = 0
                break;

            case "ce":
                currentInput = "0"
                operator = null
                accumulator = 0
                result = 0
                display.value = currentInput
                break;
            
            default:
                console.log("undefined action...")
        }
    })
})