import * as React from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import GoogleTranslate from './modules/google-translate';
import { Breadcrumbs, Link, Tab, Tabs } from '@mui/material';
import {MainLayout} from '../components/MainLayout';

export default function App() {


  return  (
    <MainLayout title={'Homa Page'} description={"Описание страницы Home"}>

      <h1>Главная страница</h1>

      <Button variant="contained" href="/">Hello World</Button>

      <div>
        <p>Перевод сайта на другие языки при помощи Google Translate Widget</p>
        <p>Пример кастомоного виджета</p>
        <p>Hello Мир!!!</p>
      </div>

    </MainLayout>
  )
}
