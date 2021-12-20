// function declaration

// sayHello()

// function sayHello() {
//     console.log("hello world from duro")
// }


// function definition

// const sayHello = function() {
//     console.log("hello world")
// }

// sayHello()

// arrow function

// const sayHello = () => {
//     console.log("hello world now")
// }

// sayHello()

// function greet(name) {
//     console.log("Hello", name)
// }

// greet("ralph")
// greet("Glory")

// celcuis to fahrenheit problem

// const toCelcuis = function(fahrenheit) {
//     console.log((5/9) * (fahrenheit - 32))
// }

const toCelcuis = fahrenhiet => {
    return ((5/9) * (fahrenhiet - 32))
}

const result = toCelcuis(78)
console.log("result", result)

// 0 - 20 zoombie
// 21 - 38 normal
// 39 > infected with covid

const temp = 50
const tempInCelcuis = toCelcuis(temp)

if(tempInCelcuis <= 20 && tempInCelcuis >= 0) {
    console.log("This is a zoombie")
} else if(tempInCelcuis <= 38 && tempInCelcuis >= 21) {
    console.log("this person is normal")
} else {
    console.log("this person is infected", tempInCelcuis)
}

// IIFE
const nice = (function() {
    console.log("greetings from IIF")

    return {
        name: "nice guy"
    }
})()

console.log(nice)