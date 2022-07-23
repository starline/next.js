import Head from 'next/head';
import { MainLayout } from '../../components/MainLayout';

const Products = () => (
    <MainLayout title={'Products Page'} description={"Описание страницы Товаров"}>
      <Head>
        <title>страница Товаров</title>
      </Head>

      <h1>Товары</h1>
    </MainLayout>
)

export default Products