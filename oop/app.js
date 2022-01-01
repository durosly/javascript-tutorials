// class declaration
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
// }

// const dog = new Animal("dog")

// console.log(dog)

// class expression
// const Person = class Person2 {
//     constructor(name) {
//         this.name = name
//     }
// }

// const john = new Person("john")
// console.log(Person.name)
// console.log(john)

// const car = {
//     color: "red",
//     manufacturer: "Toyota",
//     drive: function() {
//         console.log(`Driving the ${this.color} ${this.manufacturer} Car`)
//     }
// }

// const bike = {
//     color: "black",
//     manufacturer: "zemoora",
//     drive: () => {
//         console.log(`Driving the ${this.color} ${this.manufacturer} Bike`)
//     }
// }

// car.drive()
// bike.drive()

class Person {
    static count = 0
    constructor(name) {
        this.name = name
        this.count = this.count + 1
    }
}

const john = new Person("john")
const mary = new Person("mary")
console.log(Person.count)

//console.log(john.count)

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static calcDistance(a, b) {
        //return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((b.y - a.y), 2))
        return Math.hypot((a.x - b.x), (a.y - b.y))
    }
}

const p1 = new Point(12, 6)
const p2 = new Point(4,5)

console.log(Point.calcDistance(p1, p2))

// public fields 
class Animal {
    name = "Spike"
    constructor(name) {
       this.name = name
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

const bingo = new Dog("bingo")
console.log(bingo)


