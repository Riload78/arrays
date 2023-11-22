const fruits = ['apple', 'orange', 'lemon']

console.log(fruits[0])
console.log('at:', fruits.at(-1))

// push inserta un elemento al final.
fruits.push('Pera')
console.log('Push:', fruits)

console.log(fruits.pop())
console.log(fruits)

console.log(fruits.shift())
console.log(fruits)

const styles = ['Jazz', 'Blues']
styles.push('Rock-n-Roll')
styles[Math.floor((styles.length - 1) / 2)] = 'Classic'
console.log(styles)
console.log(styles.shift())
styles.unshift('Rap', 'Reggae')
console.log(styles)

const arr = ['voy', 'a', 'casa']
arr.splice(0, 1)
console.log(arr)
console.log(arr.splice(0, 0, 'Juan', 'va'))
console.log(arr)

const letters = ['a', 'b', 'c', 'd']
const sub = letters.slice(0, 2)
console.log(sub)
console.log(letters)

const users = [
  { id: 1, name: 'Pedro' },
  { id: 2, name: 'María' },
  { id: 3, name: 'Oscar' }
]

const user = users.find((item) => item.id === 1)
console.log(user)
console.log(user.name)

const camelize = (word) => {
  const arrWord = word.split(' ')
  console.log(arrWord)
  const arrCapitaliza = arrWord.map((item) => item[0].toUpperCase() + item.slice(1))
  return arrCapitaliza
}

/* Escribe una función filterRange(arr, a, b) que obtenga un array arr,
busque los elementos con valor mayor o igual a a y menor o igual a b y devuelva un array con los resultados.
La función no debe modificar el array.Debe devolver un nuevo array. */

const filterRange = (arr, a, b) => {
  if (arr === undefined || !Array.isArray(arr)) throw new Error('FirstParam is required')
  if (a === undefined || typeof (a) !== 'number') throw new Error('second param is required')
  if (b === undefined || typeof (b) !== 'number') throw new Error('3 param is required')
  const result = []
  arr.map((index) => {
    if (index >= a && index <= b) result.push(index)
    return undefined
  })
  return result
}

const filterRangeFilter = (arr, a, b) => {
  if (arr === undefined || !Array.isArray(arr)) throw new Error('FirstParam is required')
  if (a === undefined || typeof (a) !== 'number') throw new Error('second param is required')
  if (b === undefined || typeof (b) !== 'number') throw new Error('3 param is required')
  const result = arr.filter(index => index >= a && index <= b)

  return result
}

/* Escribe una función filterRangeInPlace(arr, a, b)
que obtenga un array arr y remueva del mismo todos los valores excepto aquellos que se encuentran entre a y b.
El test es: a ≤ arr[i] ≤ b.
La función solo debe modificar el array. No debe devolver nada. */

const filterRangeInPlace = (arr, a, b) => {
  if (arr === undefined || !Array.isArray(arr)) throw new Error('FirstParam is required')
  if (a === undefined || typeof (a) !== 'number') throw new Error('second param is required')
  if (b === undefined || typeof (b) !== 'number') throw new Error('3 param is required')
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    if (element >= a || element <= b) {
      arr.splice(index, 1)
    }
  }
  return arr
}

// Ordenar en orden decreciente

const orderArr = (arr) => {
  if (arr === undefined || !Array.isArray(arr)) throw new Error('FirstParam is required')
  arr.sort((a, b) => b - a)
  return arr
}

const Calculator = (expression) => {
  if (expression === undefined) throw new Error('Param is required')
  if (typeof expression !== 'string') throw new Error('Param must be a string')
  const arr = expression.split('')
  if (arr.length !== 5) throw new Error('Formato no permitido')
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    if (element === ' ') arr.splice(index, 1)
  }
  const num1 = parseInt(arr[0])
  const num2 = parseInt(arr[2])
  const operator = arr[1]

  let result = null
  if (operator === '+') result = num1 + num2
  if (operator === '-') result = num1 - num2

  return result
}

const john = { name: 'John', surname: 'Smith', id: 1 }
const pete = { name: 'Pete', surname: 'Hunt', id: 2 }
const mary = { name: 'Mary', surname: 'Key', id: 3 }

const usersWordpress = [john, pete, mary]

const usersMapped = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Param must be an array of objects')
  const response = []
  arr.map(user => {
    console.log(user)
    const newName = `${user.name} ${user.surname}`
    const id = user.id
    console.log(newName)
    const newUser = {
      'fullname': newName,
      'id': id
    }
    response.push(newUser)
    return undefined
  })
  console.log(response)
  return response
}

usersMapped(usersWordpress)

module.exports = { filterRange, filterRangeFilter, filterRangeInPlace, orderArr, Calculator, usersMapped }
