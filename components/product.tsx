import Link from "next/link";
import React from "react";
import { IProductProps } from "../interfaces/product";

interface IState {
    date?: Date;
}

export class Product extends React.Component<IProductProps, IState> {

    timerID: NodeJS.Timer;

    constructor(props: IProductProps) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <Link href={`/products/${this.props.product.id}`}>
                <a>
                    <div className='product_item'>
                        <div className="product_item_name">{this.props.product.id} {this.props.product.title}</div>
                        <div className="product_item_time">{this.state.date.toLocaleTimeString()}</div>
                    </div>
                </a>
            </Link>
        )
    }
}