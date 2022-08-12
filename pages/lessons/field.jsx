import React from 'react'
import MainLayout from '../../layouts/MainLayout'

export default class Field extends React.Component {
    
    constructor(props){
        super(props)

    }

    render() {
        return (
            <MainLayout title={'Field Page'} description={"Описание страницы Field"}>


                <div>Field</div>
            </MainLayout>
        )
    }
}