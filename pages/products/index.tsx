import { Link } from '@mui/material';
import Head from 'next/head';
import { IProduct, IProducts } from '../../interfaces/product';
import {MainLayout} from "../../layouts/MainLayout";

export default function Products({products}:IProducts) {
  return(
    <MainLayout title={'Products Page'} description={"Описание страницы Товаров"}>
      <Head>
        <title>страница Товаров</title>
      </Head>

      <h1>Товары</h1>

      {products.map(product => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>{product.id} {product.title}</Link>
        </div>
      ))}
    </MainLayout>
  )
}

// Эта функция выполняется каждый раз при обращении к страницена стороне сервера
export async function getServerSideProps() {

  // Создаем данные
  const products:IProduct[] = [
    {
      id: 1,
      title: 'Первый товар',
      body: 'Описание первого товара'
    },
    {
      id: 2,
      title: 'Второй товар: ',
      body: 'Описание второго товара'
    }
]

  // Возвращаем данные в props
  return {props: {
    products
  }}
}