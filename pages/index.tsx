import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { MainLayout } from "../layouts/MainLayout";
import { IProducts, IProduct } from '../interfaces/product';


export default function Home({products}:IProducts) {
  console.log('Home')

  useEffect(()=>{
    console.log('useEffect');
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

      {products.map(product => (
        <div>{product.id} {product.title}</div>
      ))}

    </MainLayout>
  )
}

// Эта функция выполняется каждый раз при обращении к странице
export async function getServerSideProps() {

  // Создаем данные
  const products:IProduct[] = [{
    id: 1,
    title: 'Первый товар: ' + Math.random(),
    body: 'Описание первого товара'
  }]

  // Возвращаем данные в props
  return {props: {
    products
  }}
}


