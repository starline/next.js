import * as React from 'react';

// Тест
// Typescript
const boolVar: boolean = true
let numVar: number = 12
numVar = 45

// Array
const arrVar: number[] = [1, 2, 4, 8]
const arr2Var: Array<number> = [1, 2, 4, 8]
const arrStringVar: string[] = ['Hello', 'TypeScript']

// Any
let anyVar: any = 'string'
anyVar = 12

function myFunction(fVar: string): void {
  console.log(fVar)
}
myFunction('myFunction ok')

// Стрелочная функция
const arrowFunction = () => {
  console.log('w')
}


// Создаем свои типы
type login = string | number

// Интерфейсы
interface IRect {
  readonly id: number,
  color?: string, // необязательный 
  size: {
    width: login
    height: number
  }
}

const rect1: IRect = {
  id: 1,
  size: {
    width: 100,
    height: 200
  },
  color: '#ccc'
}
rect1.color = '#ddd'
rect1.size.height = 100
const rect2 = {} as IRect

// Расширение 
interface IRectMethod extends IRect {
  getArea: () => number
}

const rectMethod1: IRectMethod = {
  id: 2,
  size: {
    width: 100,
    height: 100
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

interface IStyle {
  [key: string]: string
}

const css: IStyle = {
  'mt-10': '10px',
  'borderRadius': '5px'
}

// enum
enum Membership {
  Simle = '100$',
  Sradart = '200$',
  Premium = '300$'
}
const memberShip = Membership.Premium








// JavaScript
let vara = 'значние vara'
// создаем переменную и задаем объяект
// Переменная содержит ссылку на обьект
// Если свойству задана функция(метод)
const myObject = {
  a: 'значение a',
  b: 'значение b',
  с: function () {
    console.log('функция')
  },
  delete: 'удалить',
  inObjet: {
    ina: 'значние inb',
    inb: 'значние ina'
  },
  vara
}

delete myObject.delete

myObject.a = 'Новое значение а'
myObject['d'] = 'Значение d'

// Задаем имя нового свойства в качестве переменной  
const properyE = 'e'
myObject[properyE] = 'значние e'

// Область видимости 
const hello: string = 'hello'
const world: string = 'world'
const join = `${hello} ${world}`

// ... 
const arr10: [string, string, string, string] = ['a', 'b', 'c', 'd']
arr10[1] = 'two'
let arr20 = [...arr10] // ['a','b','c','d']
let arr30 = [1, 2, ...arr20, 3] // [1, 2, 'a','b','c','d', 3]

function addProp(var1: string, var2: string, var3: string, var4: string): string {
  return var1 + var2 + var3 + var4
}

export default function selectArr(arr: number[]): void {
  console.log(arr)
}

console.log(addProp(...arr10))
console.dir(myObject)