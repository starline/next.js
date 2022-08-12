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
                    <div >
                        <div className="product_item_name">{this.props.product.id} {this.props.product.title}</div>
                        <Timer></Timer>
                    </div>
                </a>
            </Link>
        )
    }
}