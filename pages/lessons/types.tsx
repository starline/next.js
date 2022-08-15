import React, { ReactElement } from "react";
import MainLayout from "../../layouts/MainLayout";

// Интерфейсы
type login = string | number // Создаем свои типы

interface IRect {
  readonly id: number, // только для чтения
  color?: string, // необязательный 
  size: {
    width: login
    height: number
  }
}

// Расширение 
interface IRectMethod extends IRect {
  getArea: () => number
}

interface IStyle {
  [key: string]: string
}

// Typescript: number, string, boolean, Object, null, undefined, symbol (7 pcs)
interface ITypes {
  number: number,
  string: string,
  boolean: boolean,
  object: Object,
  null: null,
  undefined: undefined,
  symbol: symbol
}

export default function Types() {

  const types: ITypes = {
    number: 1, 
    string: 'string',
    boolean: true,
    object: {},
    null: null,
    undefined: undefined,
    symbol: Symbol('id')
  }

  types.number = NaN // NaN - not a number
  // ['', 'false', 0, NaN, undefined, null] = Boolean(false) 

  

  let content: ReactElement[] = [];
  const boolVar: boolean = true
  let numVar: number = 12
  numVar = 45

  // Array TypeScript
  const arrNumber: number[] = [1, 2, 4, 8]
  const arr2Number: Array<number> = [1, 2, 4, 8]
  const arrStringr: string[] = ['Hello', 'TypeScript']

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

  content.push(<> Object IReact: {JSON.stringify(rect1)}</>)
  content.push(<> Object as IReact: {JSON.stringify(rect2)}</>)

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
  content.push(<>Object as IRectMethod: {JSON.stringify(rectMethod1)}</>)

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
  content.push(<>Membership.Premium: {Membership.Premium}</>)


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
  content.push(<>myObject original: {JSON.stringify(myObject)}</>)

  delete myObject.delete

  myObject.a = 'Новое значение а'
  myObject['d'] = 'Значение d'

  // Задаем имя нового свойства в качестве переменной  
  const properyE = 'e'
  myObject[properyE] = 'значние e'
  content.push(<>myObject modified: {JSON.stringify(myObject)}</>)

  // Область видимости 
  const hello: string = 'hello'
  const world: string = 'world'
  const join = `${hello} ${world}`
  content.push(<>hello+word: {join}</>)

  // ... type для каждого элемента массива для передачи в значения функции
  const arr10: [string, string, string, string,] = ['a', 'b', 'c', 'd']
  arr10[1] = 'bb'
  let arr20: Array<string> = [...arr10] // ['a','bb','c','d']
  let arr30: Array<string | number> = [1, 2, ...arr20, 3] // [1, 2, 'a','bb','c','d', 3]

  function addProp(var1: string, var2: string, var3: string, var4: string): string {
    return var1 + var2 + var3 + var4
  }

  // Функция ничего не возвращает
  function selectArr(arr: number[]): void {
    console.log(arr)
  }
  content.push(<>Function arr props: {addProp(...arr10)}</>)




  return (
    <MainLayout title={'Types'} description={"Описание страницы Types"}>
      <h1>Types, Interface</h1>
      <div>
        {content.map((element: ReactElement, i: number) => (
          <div key={i}>{i}. {element}</div>
        ))}
      </div>
    </MainLayout>
  )
}