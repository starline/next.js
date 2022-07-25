import Button from '@mui/material/Button'
import Head from 'next/head'
import React from 'react'

type IMainLayoutProps = {
    children: React.ReactNode,
    title: string,
    description?: string,
    className?: string,
} 

export function MainLayout({title, description, children}:IMainLayoutProps) {

    return(
        <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}></meta>
        </Head>
        <nav>
            <Button variant="outlined" href='/'>Main</Button>
            <Button variant="outlined" href='/products'>Products</Button>
        </nav>
        <main className='content'>
            {children}
        </main>

        <div className="language">
            <img src="/image/lang__ru.png" alt="ru" data-google-lang="ru" className="language__img"/>
            <img src="/image/lang__uk.png" alt="uk" data-google-lang="uk" className="language__img"/>
            <img src="/image/lang__en.png" alt="en" data-google-lang="en" className="language__img"/>
        </div>
        </>
    )
}
