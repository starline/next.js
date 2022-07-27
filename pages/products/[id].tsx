import { useRouter } from "next/router"
import { GetServerSideProps } from "next/types"
import { IProduct, IProductProps } from "../../interfaces/product"
import {MainLayout} from "../../layouts/MainLayout"



export default function Product({product}:IProductProps) {
    const router = useRouter()

    return (
        <MainLayout title={`Product Page ${product.id}`}>  
            <h1>{product.title} {product.id}</h1>
        </MainLayout>
    )
}

interface IServerSideProps extends GetServerSideProps {
    params:{
        id:number
    }
}

// Эта функция выполняется каждый раз при обращении к страницена стороне сервера
export async function getServerSideProps({params}:IServerSideProps) {

    // Создаем данные, выбираем из базы
    const product:IProduct = {
      id: params.id,
      title: 'Товар',
      body: 'Описание товара'
    }
  
    // Возвращаем данные в props
    return {props: {
      product
    }}
  }