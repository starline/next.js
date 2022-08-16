import React, { ReactElement } from "react";
import MainLayout from "../../layouts/MainLayout";

// Интерфейсы
type myType = string | number // Создаем свои типы

interface IRect {
  readonly id: number, // только для чтения
  color?: string, // необязательный 
  size: {
    width: number
    height: number
  }
  myType?: myType
}

// Расширение 
interface IRectMethod extends IRect {
  getArea: (k: number) => number
}
interface IRectCSS extends IRect {
  css: IStyle
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


// General function of functionality component
// Основная функция функционального компонента
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

  // Array TypeScript
  const arrNumber: number[] = [1, 2, 4, 8]
  const arr2Number: Array<number> = [1, 2, 4, 8]
  const arrStringr: string[] = ['Hello', 'TypeScript']

  // Any
  let anyVar: any = 'string'
  anyVar = 12
  anyVar = true

  function myFunction(fVar: string): void { // Функция ничего не возвращает
    console.log('myFunction: ' + fVar)
  }
  function selectArr(arr: number[]): void {
    console.log('selectArr: ' + arr)
  }
  myFunction('ok')
  selectArr([1,2,3,4])



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
  content.push(<> Object IReact: {JSON.stringify(rect1)}</>)


  const rectMethod1: IRectMethod = {
    id: 2,
    size: {
      width: 100,
      height: 100
    },
    getArea(k) {
      return this.size.width * this.size.height * k
    }
  }
  content.push(<>Object as IRectMethod: {JSON.stringify(rectMethod1)}</>)


  // CSS
  const rect2 = {} as IRectCSS // Создаем обьект с привязкой по типу
  rect2.css = {
    'margin-top': '10px',
    'border': '1px solid #ccc',
    'padding': '20px'
  }
  content.push(<>New Object as IReactCSS: {JSON.stringify(rect2)}</>)


  // enum
  enum Membership {
    Simle = '100$',
    Sradart = '200$',
    Premium = '300$'
  }
  content.push(<>Membership.Premium: {Membership.Premium}</>)

  return (
    <MainLayout title={'Types'} description={"Описание страницы Types"}>
      <h1>Types, Interface</h1>

      <div style={rect2.css}>
        {content.map((element: ReactElement, i: number) => (
          <p key={i}><b>{i}</b>. {element}</p>
        ))}
      </div>
    </MainLayout>
  )
}