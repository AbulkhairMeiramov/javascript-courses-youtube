const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
// const people = [
//     {name: 'Vladilen', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
// function addItemToEnd() {

// }

// Method

// cars.push('Renault')
// cars.unshift('Volga')
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)
// const index = cars.indexOf('BMW')
// cars[index] = 'Porsche'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//     if(person.budget === 3500){
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const index = people.findIndex(function (person) {
//     return person.budget === 3500
// })
// const person = people.find(function (person) {
//     return person.budget === 3500
// })
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(people[index])

// console.log(cars.includes('Mazda'))


// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
//
// console.log(upperCaseCars)
// console.log(cars)


// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(sqrt)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)


// Задача 1

// const text = 'Hello, we study JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
}, 0)

console.log(allBudget)
