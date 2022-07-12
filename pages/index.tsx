import * as React from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';

function App() {
  return  (
    <>
    <Head>
      <title>Главная страница сайта</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

  <div className='btn'>

    <h1>Главная страница</h1>
    <Button  variant="contained">Hello World</Button>
  </div>
  
  </>
  )
}

export default App