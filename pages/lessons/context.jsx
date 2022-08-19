import { Button, Chip, Box, FormControlLabel, Switch, TextField, Fab } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import AddIcon from '@mui/icons-material/Add';


function WarningMessage(props) {
    if (!props.message)
        return null

    return (
        <div className="warning">
            Предупреждение!
        </div>
    )
}

export default class Context extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            shawWorning: true,
            testvar: 'testvar value',
        }

        this.state.chipOn = true
        this.state.newChip = ''

        let chipData = ['Первый элемень', 'Второй Chip']

        this.handleClick = this.handleClick.bind(this)
        this.handleChipDelete = this.handleChipDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handlFabClick = this.handlFabClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)

        // Context JS
        function ff() {
            let tv = (() => (this.state.testvar))() //Замыкаем переменную с помощью самовыполняющейся функции
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
        // contextFF.info.bind(newFF,'innerVar')() // установить контекст и вернуть новую функцию
        // contextFF.info.call(newFF, 'innerVar') // Установить контекст и запустить функцию. Параметры задаются через запятую
        contextFF.info.apply(newFF, ['innerVar']) // Установить контекст и запустить функцию. Параметры задаются в массиве

        const array = [1, 2, 3, 4, 5, 6, 7, 8]

        // Создаем метод mult для прототипов Array
        Array.prototype.mult = function (n) {
            return this.map(function (i, index, thisArray) {
                thisArray[index] = i * n
            })
        }
        array.mult(2)
        chipData.push('Array.mult: ' + array.join(' '))

        this.state.chipData = chipData
    }

    handleClick() {
        this.setState(state => ({
            shawWorning: !state.shawWorning
        }))
    }

    handleChipDelete(index) {
        this.setState((prevState) => {
            let chipData = [...prevState.chipData]
            chipData.splice(index, 1)
            return { chipData }
        })
    }

    handleChange(event) {
        this.setState({
            chipOn: event.target.checked
        })
    }

    handlFabClick() {
        this.setState((prevState)=>({
            chipData: prevState.chipData.concat([prevState.newChip])
        }))
    }

    handleInputChange(event) {
        this.setState({
            newChip: event.target.value
        })

    }

    render() {
        return (
            <MainLayout title={'Page'} description={"Описание страницы Page"}>

                <h1>Кнопки Listener, Context</h1>

                <div>
                    <Button variant='contained' onClick={this.handleClick} >
                        {this.state.shawWorning ? 'Спрятать' : 'Показать'}
                    </Button>

                    <WarningMessage message={this.state.shawWorning}></WarningMessage>

                    <Box sx={{ margin: '10px 0px' }}>
                        <FormControlLabel control={<Switch checked={this.state.chipOn} onChange={this.handleChange} />} label={this.state.chipOn ? 'Скрыть панель отладки' : 'Показать панель отладки'} />
                    </Box>

                    {this.state.chipOn && (
                        <Box sx={{ mt: '15px' }}>
                            <Box>
                                <TextField variant="outlined" size="small" label='Название блока' name='chipAdd' value={this.state.newChip} onChange={this.handleInputChange} />
                                <Fab sx={{ ml: '15px' }} size="small" color="secondary" aria-label="add" onClick={this.handlFabClick}>
                                    <AddIcon />
                                </Fab>
                            </Box>

                            <Box sx={{ mt: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                                {this.state.chipData.map((chip, index) =>
                                    <Chip sx={{ mr: '15px', mb: '15px' }} key={index} label={chip} color="success" variant="outlined" onDelete={() => (this.handleChipDelete(index))} />
                                )}
                            </Box>
                        </Box>
                    )}
                </div>
            </MainLayout>
        )
    }
}

