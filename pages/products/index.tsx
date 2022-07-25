import Head from 'next/head';
import {MainLayout} from "../../layouts/MainLayout";

export default function Products() {
  return(
    <MainLayout title={'Products Page'} description={"Описание страницы Товаров"}>
      <Head>
        <title>страница Товаров</title>
      </Head>

      <h1>Товары</h1>
    </MainLayout>
  )
}