import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IProductProps } from "../interfaces/product";
import Timer from "./timer";

interface IState {
    onPress: boolean
}

export class Product extends React.Component<IProductProps, IState> {

    constructor(props: IProductProps) {
        super(props)
        this.state = { onPress: false }
    }

    render() {
        return (
            <Link href={`/products/${this.props.product.id}`}>
                <a className='product_item'>
                    <div>
                        <Image src={`${this.props.product.image}`}  width='200' height='200'/>
                        <div className="product_item_name">{this.props.product.name}</div>
                        <Timer></Timer>
                    </div>
                </a>
            </Link>
        )
    }
}