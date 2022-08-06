import Link from "next/link";
import React from "react";
import { IProductProps } from "../interfaces/product";

export class Product extends React.Component<IProductProps> {
    
    render() {
        return (
            <div className='product_item'>
                <Link href={`/products/${this.props.product.id}`}>
                    <a>{this.props.product.id} {this.props.product.title}</a>
                </Link>
            </div>
        )
    }
}