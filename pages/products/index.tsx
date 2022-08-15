import { Button, Link, responsiveFontSizes } from '@mui/material';
import Head from 'next/head';
import { IProduct, IProducts } from '../../interfaces/product';
import MainLayout from "../../layouts/MainLayout";
import { Product } from '../../components/product';
import { useState } from 'react';


export default function Products({ products }: IProducts) {

  const [addProducts, setAddProducts] = useState(products);
  const [page, setPage] = useState(1);

  const handleClick = async () => {
    const newPage: number = page + 1
    const res = await fetch(`https://nastanok.ru/exchange/rest/products?page=${newPage}&limit=4`)
    const newProducts = await res.json()
    setAddProducts(addProducts.concat(newProducts))
    setPage(newPage)
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
        <Button variant='contained' onClick={handleClick}>Показать еще товары</Button>
        <div>Страница: {page}</div>
      </div>
    </MainLayout>
  )
}

// Эта функция выполняется каждый раз при обращении к странице на стороне сервера
export async function getServerSideProps() {


  const res = await fetch(`https://nastanok.ru/exchange/rest/products?page=1&limit=4`)
  const products: IProduct[] = await res.json()

  // Возвращаем данные в props
  return {
    props: {
      products
    }
  }
}