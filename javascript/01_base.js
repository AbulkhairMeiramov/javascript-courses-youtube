// 1 Переменные

// const firstName = 'Abulkhair'
// const age = 22 //number
// const isProgrammer = true //boolean

// const _ = 'private'
// const $ = 'some value'

// const if = 'mkef' //err
// const withNum5 = '5'
// const 5withNum = 5 //err

// 2 Мутирование

// console.log('Имя человека: ' + firstName + ', Возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', Возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы

// let currentYear = 2022
// const birthYear = 1999

// const age = currentYear - birthYear
// const a = 10
// const b = 5
// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Abulkhair'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)


// 5 Приоритет операторов

// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 26 >= 27 => true
// console.log(isFullAge)


// 6 Условные операторы

// const courseStatus = 'pending' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// }
// else if (courseStatus === 'pending') {
//     console.log('Курс находится в процессе разработки')
// }
// else {
//     console.log('Курс не получился')
// }

// const isReady = true
// if (isReady === true) {
//     console.log('Все готово')
// }
// else {
//     console.log('Все не готово')
// }

// Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Все не готово')


// const num1 = 42 //number
// const num2 = '42' //string
//
// console.log(num1 === num2)


// 7 Булевая логика
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

// 8 Функции

// function calculateAge(year) {
//     return 2020 - year
// }

// console.log(calculateAge(1993))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('Человек по имени: ' + name + ' Сейчас имеет возраст: ' + age)
//     } else {
//         console.log('Вообще-то это уже будушее')
//     }
// }
//
// logInfoAbout('Абулхаир', 1999)


// 9 Массивы

// const cars = ['Mazda', 'Mercedes', 'Ford']
// const cars = new Array('Mazda', 'Mercedes', 'Ford')

// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
//
// cars[0] = 'Porsche'
// console.log(cars)
// cars[cars.length] = 'BMW'
// console.log(cars)

// 10 Циклы

// const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты

const person = {
    firstName: 'Abulkhair',
    lastName: 'Meiramov',
    year: 1999,
    languages: ['Ru', 'Eng', 'De'],
    hasWife: false,
    greet: function () {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()



