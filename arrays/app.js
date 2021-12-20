// const myArray = ["mango", "orange", "grape"]

// console.log(myArray)

// // const myArray2 = new Array("test", "hello", "world")
// // console.log(myArray2)

// console.log(myArray[1])

// console.log(myArray.length)

// console.log(myArray[myArray.length - 1])

// sort
//console.log(myArray.sort())

// reverse
//console.log(myArray.reverse())

// push
// myArray.push("banana")

// console.log(myArray)

// // pop
// const banana = myArray.pop()
// console.log(banana)
// console.log(myArray)

// // shift
// console.log(myArray.shift())
// console.log(myArray)

// // unshift
// console.log(myArray.unshift("kola"))
// console.log(myArray)

// //join
// const msgList = ["my", "name", "is", "duro"]
// console.log(msgList.join(", "))

// objects
const person = {
    name: "john",
    age: 54,
    speak: () => {
        console.log("hey there!!!")
    }
}

console.log(person.name)
person.speak()

const person2 = {}
person2.firstName = "John"
person2.lastName = "Doe"
console.log(person2)

// new keyword
const person3 = new Object()
person3.name = "Duro"
console.log(person3)

const person4 = person3
console.log(person4)
person4.name = "Zita"

console.log(person3)