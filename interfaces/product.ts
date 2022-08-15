export interface IProduct {
    id: number,
    name: string,
    body: string,
    anotation?: string,
    image?: string,
    url?: string
}

export interface IProducts {
    products: IProduct[]
}

export interface IProductProps {
    product: IProduct
}