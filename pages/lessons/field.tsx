import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'

interface IProps { }
interface IField {
    id: string
    label: string
    otherProps?: string,
    multiline?: boolean,
    fullWidth?: boolean,
    row?: number
}

export default class Field extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props)
    }

    FieldList() {

        return [
            {
                id: 'name',
                label: 'Имя',
                otherProps: ''
            },
            {
                id: 'email',
                label: 'Email',
                otherProps: ''
            },
            {
                id: 'adress',
                label: 'Адрес',
                otherProps: ''
            },
            {
                id: 'comment',
                label: 'Комментарий',
                fullWidth: true,
                multiline: true,
                rows: 4
            }
        ]
    }

    render() {
        return (
            <MainLayout title={'Field Page'} description={"Описание страницы Field"}>
                <Box component='form'>
                    {this.FieldList().map((field: IField) => (
                        <div key={field.id} className='user_field'>
                            <TextField variant="outlined" size="small" {...field} />
                        </div>
                    ))}

                    <Button variant="contained">Сохранить</Button>
                </Box>
            </MainLayout>
        )
    }
}