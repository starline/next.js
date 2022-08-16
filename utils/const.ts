interface IRoute {
    name: string,
    path: string
}

export const route:Array<IRoute> = [
    {
        name: 'Main',
        path: '/'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'Context',
        path: '/lessons/context'
    },
    {
        name: 'Types',
        path: '/lessons/types'
    },
    {
        name: 'Field',
        path: '/lessons/field'
    },
    {
        name: 'Scope',
        path: '/lessons/scope'
    }
]