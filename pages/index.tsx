import * as React from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Script from 'next/script';
import { DESTRUCTION } from 'dns';


function App() {
  return  (
    <>
    <Head>
      <title>Главная страница сайта</title>
      <meta name='description' content='Описание сайта'/>
    </Head>

    <Script strategy='beforeInteractive' src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></Script>
    <Script strategy='beforeInteractive' src="/js/google-translate.js"></Script>

    <div className='content'>
      <h1>Главная страница</h1>

      <Button variant="contained" href="/">Hello World</Button>

      <div>
        <p>Перевод сайта на другие языки при помощи Google Translate Widget</p>
        <p>Пример кастомоного виджета</p>
        <p>Hello Мир!!!</p>
      </div>

    </div>

    <div className="language">
      <img src="/image/lang__ru.png" alt="ru" data-google-lang="ru" className="language__img"/>
      <img src="/image/lang__uk.png" alt="uk" data-google-lang="uk" className="language__img"/>
      <img src="/image/lang__en.png" alt="en" data-google-lang="en" className="language__img"/>
    </div>
    </>
  )
}

export default App



// Тест

let vara = 'значние vara'
// создаем переменную и задаем объяект
// Переменная содержит ссылку на обьект
// Если свойству задана функция(метод)
const myObject = {
  a: 'значение a',
  b: 'значение b',
  с: function(){
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

myObject.с()
console.dir(myObject)