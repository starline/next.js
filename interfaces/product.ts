export interface IProduct {
    id: number,
    title: string,
    body: string
}

export interface IProducts {
    products: IProduct[]
}

export interface IProductProps {
    product: IProduct
}