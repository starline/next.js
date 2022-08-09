import { Button } from "@mui/material";
import React from "react";
import { MainLayout } from "../layouts/MainLayout";

export default class Page extends React.Component{

    constructor(props){
        super(props)
        this.state = {shawWorning: true}
        this.HandleClick = this.HandleClick.bind(this)

    }

    HandleClick(){
        //console.log(vareble)
        this.setState(state =>({
            shawWorning: !state.shawWorning
        }))
    }

    render(){
        
        return(
            <MainLayout title={'Page'} description={"Описание страницы Page"}>

                <h1>Кнопки Listener</h1>

                <div>
                    <Button variant='contained' onClick={this.HandleClick} >
                        {this.state.shawWorning ?'Спрятать' : 'Показать'}
                    </Button>

                    <WarningMessage message={this.state.shawWorning}></WarningMessage>

                </div>
            </MainLayout>
        )
    }
}

function WarningMessage(props){
    if(!props.message)
        return null
    
    return(
        <div className="warning">
            Предупреждение!
        </div>
    )
}