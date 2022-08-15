import { useRouter } from "next/router"
import { GetServerSideProps } from "next/types"
import { IProducts, IProductProps, IProduct } from "../../interfaces/product"
import MainLayout from "../../layouts/MainLayout"
import Image from "next/image";


export default function Product({ product }: IProductProps) {
    const router = useRouter()

    return (
        <MainLayout title={`${product.name}`}>
            <h1>{product.name} </h1>
            <Image src={product.image} width='200' height='200'/>
            <ProductBody body={product.body}></ProductBody>
        </MainLayout>
    )
}

interface IProps{
    body:string
}

function ProductBody(props:IProps){
    return(
        <div dangerouslySetInnerHTML={{__html: props.body}}/>
    )
}


interface IServerSideProps extends GetServerSideProps {
    params: {
        id: number
    }
}

// Эта функция выполняется каждый раз при обращении к страницена стороне сервера
export async function getServerSideProps({ params }: IServerSideProps) {

    // Создаем данные, выбираем из базы
    const res = await fetch(`https://nastanok.ru/exchange/rest/products/${params.id}`)
    const products: IProducts = await res.json()
    const product: IProduct = products[0]

    // Возвращаем данные в props
    return {
        props: {
            product
        }
    }
}