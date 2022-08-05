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
      
      <div className='product_row'>
        {products.map(product => (
          <div className='product_item' key={product.id}>
            <Link href={`/products/${product.id}`}>{product.id} {product.title}</Link>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

// Эта функция выполняется каждый раз при обращении к странице на стороне сервера
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
      title: 'Второй товар "2" ',
      body: 'Описание второго товара'
    },
    {
      id:3,
      title: 'Третий продук',
      body: 'Описание треьего продукта'
    }
]

  // Возвращаем данные в props
  return {props: {
    products
  }}
}