import { Button, Link, responsiveFontSizes } from '@mui/material';
import Head from 'next/head';
import { IProduct, IProducts } from '../../interfaces/product';
import MainLayout from "../../layouts/MainLayout";
import { Product } from '../../components/product';
import { useState } from 'react';
import { json } from 'stream/consumers';


export default function Products({ products }: IProducts) {

  const [addProducts, setAddProducts] = useState(products);

  //selectArr([0, 1, 2]);

  const handleClick = () =>{
    const id = addProducts[addProducts.length - 1].id + 1
    const newProduct = [{
        id,
        name: `Товар`,
        body: 'Описание товара'
    }]
    setAddProducts(addProducts.concat(newProduct))

  }

  return (
    <MainLayout title={'Products Page'} description={"Описание страницы Товаров"}>
      
      <Head>
        <title>страница Товаров</title>
      </Head>

      <h1>Товары</h1>

      <div className='product_row'> 
        {addProducts.map((product: IProduct) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      
      <div className='add_btn'>
        <Button variant='contained' onClick={handleClick}>Добавить товар</Button>
      </div>
    </MainLayout>
  )
}

// Эта функция выполняется каждый раз при обращении к странице на стороне сервера
export async function getServerSideProps() {


  const res =  await fetch('https://nastanok.ru/exchange/rest/products?page=1&limit=5')
  const data:IProduct[] = await res.json()
  const products: IProduct[] = data

  // Возвращаем данные в props
  return {
    props: {
      products
    }
  }
}