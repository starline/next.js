import {MainLayout} from '../components/MainLayout'
import css from '../styles/error.module.css'

export default function Error404(){
    return(
        <MainLayout title={'Ошибка 404'}>
            <h1 className={css.error}>Ошибка 404</h1>
        </MainLayout>
    )
}