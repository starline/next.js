import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { MainLayout } from "../layouts/MainLayout";
import {GoogleTranslate} from "../lib/GoogleTranslate"

export default function Home() {
  console.log('Home')

  useEffect(()=>{
    console.log('useEffect');
    //GoogleTranslate()

  })

  return  (
    <MainLayout title={'Homa Page'} description={"Описание страницы Home"}>

      <h1>Главная страница - Список товаров</h1>

      <Button variant="contained" href="/">Hello World</Button>

      <div>
        <p>Перевод сайта на другие языки при помощи Google Translate Widget</p>
        <p>Пример кастомоного виджета</p>
        <p>Hello Мир!!!</p>
      </div>


    </MainLayout>
  )
}


