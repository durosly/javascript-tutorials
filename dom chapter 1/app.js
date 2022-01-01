const h1 = document.getElementById("header")
//console.log(h1)

const ps = document.getElementsByClassName("text")
// console.log(ps)

// for(let i = 0; i < ps.length; i++) {
//     console.log(ps[i])
// }

const divs = document.getElementsByTagName("div")
// console.log(divs)

// // query selectors
const h12 = document.querySelector("h1")
// console.log(h12)
const h13 = document.querySelector("#header")
// console.log(h13)

// // console.log("text...")

const text = document.querySelectorAll("div")
// console.log(text)

console.log(h1.innerHTML)
// h1.innerHTML = "Blessing is a very nice person"

const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
// console.log(typeof parent.innerHTML)
// parent.innerHTML = "<h2>Nice to meet you</h2>"

// // manipulating styles
h1.style.color = "orangered"

parent.style.backgroundColor = "green"

// // manipulating attributes
h1.setAttribute("class", "test")
h1.setAttribute("id", "test")
h1.setAttribute("style", "background-color: purple; text-transform: uppercase;")

// manipulating element presence
const createdP = document.createElement("p")
console.log(createdP)
createdP.innerHTML = "Zita"
// //console.log(createdP)

parent.appendChild(createdP)

// //document.body.removeChild(h1)
parent.removeChild(child)