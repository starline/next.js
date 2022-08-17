import React, { ReactElement } from 'react'
import { isArray } from 'util'
import MainLayout from '../../layouts/MainLayout'


interface IMetateg {
  title: string
  description: string
  h1?: string
  setH1asTitle: () => void
  setDescriptionAsTitle: () => void
  otherMethod: () => void
}


export default function Scope() {

  let content: ReactElement[] = []

  const metateg: IMetateg = {
    title: 'Scope - variable area scope',
    description: 'Page of Scope',
    setH1asTitle: function () { //  способ установки метода 
      this.h1 = this.title
    },
    setDescriptionAsTitle() { //  способ установки метода 
      this.desription = this.title
    },
    otherMethod: () => {
      console.log('Arrow function')
    }
  }

  metateg.setH1asTitle()

  // Почему если метод обекта создан стрелочной функции, то в нем нет this
  metateg.otherMethod()


  // JavaScript
  let vara: string = 'значние vara'
  // создаем переменную и задаем объяект
  // Переменная содержит ссылку на обьект
  // Если свойству задана функция(метод)
  const myObject = {
    a: 'значение a',
    b: 'значение b',
    c: function () {
      console.log('Метод выводит ' + this.a)
    },
    delete: 'удалить',
    inObjet: {
      ina: 'значние ina',
      inb: 'значние inb'
    },
    vara  // если название переменной совпадает с названием свойства
  }
  content.push(<>myObject original: {JSON.stringify(myObject)}</>)

  delete myObject.delete

  myObject.a = 'Новое значение а'
  myObject['d'] = 'Добавим значение d'
  myObject.c()

  // Задаем имя нового свойства в качестве переменной  
  const properyE: string = 'e'
  myObject[properyE] = 'Добавим значние e'
  content.push(<>myObject modified: {JSON.stringify(myObject)}</>)


  const hello: string = 'hello'
  const world: string = 'world'
  const join: string = `${hello} ${world}`
  content.push(<>hello+word: {join}</>)

  // ... type для каждого элемента массива для передачи в значения функции
  // const arr10: [string, string, string, string] = ['a', 'b', 'c', 'd']
  const arr10: [string, string, string, string] = ['a', 'b', 'c', 'd']
  arr10[1] = 'bb'
  let arr20: Array<string> = [...arr10] // ['a','bb','c','d']
  let arr30 = [1, [2, 2.2, 2.5], ...arr20, [[2, 3, [4, 5]]]] // [1, 2, 'a','bb','c','d', 3]

  function addProp(var1: string, var2: string, var3: string, var4: string): string {
    return var1 + var2 + var3 + var4
  }

  content.push(<>Function arr props: {addProp(...arr10)}</>)

  // Многомерный массив в одномерный
  function flatten(array: any): Array<number | string> {
    const arr = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        arr.push(...flatten(array[i]))
      } else {
        arr.push(array[i])
      }
    }
    return arr
  }
  content.push(<>flatten Array: {flatten(arr30).join(' ')}</>)


  // Удлаить повторяющиеся символы
  function removeDupes(str: string): string {
    const strArray: string[] = str.split('')
    let  clearArr: string[] = []

    // for (let i = 0; i < strArray.length; i++) {
    //   if (!clearArr.includes(strArray[i])) {
    //     clearArr.push(strArray[i])
    //   }
    // }
    //====== OR
    // strArray.forEach((el) => {
    //   if (!clearArr.includes(el))
    //     clearArr.push(el)
    // })
    //====== OR
    clearArr = Array.from(new Set(str))

    const clearStr = clearArr.join('')
    return clearStr
  }
  content.push(<>removeDupes: {removeDupes('abcd')} - {removeDupes('aabbccdd')} - {removeDupes('abcddbca')} - {removeDupes('abababcdcdcd')}</>)

  // Стрелочная функция
  const arrowFunction = () => {
    console.log('arrowFunction')
  }


  return (
    <MainLayout title={metateg.title} description={metateg.description}>
      <h1>{metateg.h1}</h1>
      <div>
        {content.map((element, index) => <p key={index}><b>{index}</b>. {element}</p>)}
      </div>
    </MainLayout >
  )
}
