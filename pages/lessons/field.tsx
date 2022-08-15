import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'

interface IProps {
}

export default class Field extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props)

    }

    render() {
        return (
            <MainLayout title={'Field Page'} description={"Описание страницы Field"}>
                <Box component='form'>
                    <TextField className='user_field' id="name" label="Имя" variant="outlined" size="small" />
                    <TextField className='user_field' id="email" label="Email" variant="outlined" size="small" />
                    <TextField className='user_field' id="phone" label="Телефон" variant="outlined" size="small" />
                    <TextField className='user_field' id="adress" label="Адрес" variant="outlined" size="small" />
                    <TextField className='user_field' id="comment" label="Комментарий пользователя" variant="outlined" fullWidth size="small" multiline rows={4} />
                    <Button variant="contained">Сохранить</Button>
                </Box>
            </MainLayout>
        )
    }
}