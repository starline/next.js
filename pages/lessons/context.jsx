import { Button, Chip, Box } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/MainLayout";

export default class Context extends React.Component {

    constructor(props) {
        super(props)

        this.state = { shawWorning: true }
        this.state = { testvar: 'testvar' }

        const chipData = ['Первый элемень', 'Второй Chip'];

        this.HandleClick = this.HandleClick.bind(this)
        this.HandleChipDelete = this.HandleChipDelete.bind(this)

        // Context JS
        function ff() {
            let tv = this.state.testvar
            function inff() {
                let count = 0

                // Если обьявим var - будет видна во всей функции
                // Если обьявим let - будет доступна внутри блока for
                for (let i = 1; i < 5; i++) {
                    count = i
                }
                return `Функция ff ${tv} ${count}`
            }
            return inff();
        }

        const contextFF = {
            a: 'var A contextff',
            cff: ff.bind(this),
            // функция info вызывается в контексте contextff
            info: function (innerVar) {
                console.group('Page Log:')
                console.log(`contextFF: ${this.a}`)
                console.log(contextFF.cff())
                console.log('var in function is ' + innerVar)
                console.groupEnd()
            }
        }
        const newFF = {
            a: 'var A newFF'
        }
        // Вызываем функцию info в контектсте newFF
        // contextFF.info.bind(newFF,'innerVar')()
        // contextFF.info.call(newFF, 'innerVar')
        contextFF.info.apply(newFF, ['innerVar'])

        const array = [1, 2, 3, 4, 5, 6, 7, 8]

        // Создаем метод mult для прототипов Array
        Array.prototype.mult = function (n) {
            return this.map(function (i, index, thisArray) {
                thisArray[index] = i * n
            })
        }
        array.mult(2)
        chipData.push('Array.mult: ' + array.join(' '))

        this.state = { chipData: chipData }
    }

    HandleClick() {
        this.setState(state => ({
            shawWorning: !state.shawWorning
        }))
    }

    HandleChipDelete(index) {
        this.setState((prevState) => {
            let chipData = [...prevState.chipData]
            chipData.splice(index, 1)
            return { chipData }
        })
    }

    render() {
        let chipOn = true

        return (
            <MainLayout title={'Page'} description={"Описание страницы Page"}>

                <h1>Кнопки Listener, Context</h1>

                <div>
                    <Button variant='contained' onClick={this.HandleClick} >
                        {this.state.shawWorning ? 'Спрятать' : 'Показать'}
                    </Button>

                    <WarningMessage message={this.state.shawWorning}></WarningMessage>

                    <Box sx={{ mt: '20px', display:'flex' , flexWrap:'wrap', justifyContent:'flex-start'}}>
                        {chipOn &&
                            this.state.chipData.map((chip, index) =>
                                <Chip sx={{mr: '15px'}} key={index} label={chip} color="success" variant="outlined" onDelete={() => (this.HandleChipDelete(index))} />
                            )}
                    </Box>
                </div>
            </MainLayout>
        )
    }
}

function WarningMessage(props) {
    if (!props.message)
        return null

    return (
        <div className="warning">
            Предупреждение!
        </div>
    )
}