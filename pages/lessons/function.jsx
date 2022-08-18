import React, { ReactElement } from 'react'
import MainLayout from '../../layouts/MainLayout'

export default function FunctionPage() {
    let content = []

    const metateg = {
        title: 'Function',
        h1: 'Function page',
        description: ()=>(this.title + this.description)
    }

    // Реализовать собственный метод bind
    Function.prototype.myBind = function (context, ...arg) {
        return (...argIn) => {
            return this.call(context, ...arg.concat(...argIn))
        }
    }

    const person = {
        id: 1,
        name: 'Andrii'
    }

    function useMyBind(...arg) {
        content.push(<>useMyBind: {this.name} {arg.join(' ')}</>)
    }

    useMyBind.myBind(person, ...[1, 2])([3, 4])

    
    return (
        <MainLayout title={metateg.title} description={metateg.description}>
            <h1>{metateg.h1}</h1>
            <div>
                {content.map((element, index) => <p key={index}><b>{index}</b>. {element}</p>)}
            </div>
        </MainLayout>
    )
}
