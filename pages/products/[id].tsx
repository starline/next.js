import Head from "next/head"
import { useRouter } from "next/router"
import { MainLayout } from "../../components/MainLayout"

export default function Product() {
    const router = useRouter()

    return (
    <MainLayout title={'Product Page '+router.query.id}>  
        <h1>Страница Товара {router.query.id}</h1>
    </MainLayout>
    )
}