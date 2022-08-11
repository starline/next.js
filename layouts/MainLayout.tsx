import Button from '@mui/material/Button'
import Head from 'next/head'
import React from 'react'
import GoogleTranslate from '../lib/GoogleTranslate'

type IMainLayoutProps = {
    children: React.ReactNode,
    title: string,
    description?: string,
    className?: string,
}

export function MainLayout({ title, description, children }: IMainLayoutProps) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
            </Head>

            <header>
                <div className='wrap'>
                    <nav>
                        <Button variant="outlined" href='/'>Main</Button>
                        <Button variant="outlined" href='/products'>Products</Button>
                        <Button variant="outlined" href='/lessons/context'>Context</Button>
                        <Button variant="outlined" href='/lessons/types'>Types</Button>
                    </nav>
                </div>
            </header>

            <main>
                <div className='wrap'>
                    <div className='content'>
                        {children}
                    </div>
                </div>
            </main>

            <GoogleTranslate originalLang='ru' langFirstVisit='uk' domain='localhost:3000'></GoogleTranslate>

            <footer>
                <div className='wrap'>
                    <div>Подвал сайта</div>
                </div>
            </footer>
        </>
    )
}
