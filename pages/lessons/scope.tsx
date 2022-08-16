import React, { ReactElement } from 'react'
import MainLayout from '../../layouts/MainLayout'


interface IMetateg {
  title: string
  description: string
  h1?: string
  setH1asTitle: () => void
  setDescriptionAsTitle: () => void
}


export default function Scope() {

  const metateg: IMetateg = {
    title: 'Scope - variable area scope',
    description: 'Page of Scope',
    setH1asTitle() {
      this.h1 = this.title
    },
    setDescriptionAsTitle() {
      this.desription = this.title
    }
  }

  // Почему если метод обекта создан стрелочной функции, то в нем нет this

  metateg.setH1asTitle()




  let content: ReactElement[] = []

  // JavaScript
  let vara = 'значние vara'
  // создаем переменную и задаем объяект
  // Переменная содержит ссылку на обьект
  // Если свойству задана функция(метод)
  const myObject = {
    a: 'значение a',
    b: 'значение b',
    c: function () {
      console.log('функция')
    },
    delete: 'удалить',
    inObjet: {
      ina: 'значние ina',
      inb: 'значние inb'
    },
    vara
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
  let arr30: Array<string | number> = [1, 2, ...arr20, 3] // [1, 2, 'a','bb','c','d', 3]

  function addProp(var1: string, var2: string, var3: string, var4: string): string {
    return var1 + var2 + var3 + var4
  }

  content.push(<>Function arr props: {addProp(...arr10)}</>)



  
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
