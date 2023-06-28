import React, { Component } from 'react'
import ProductItem from './productItem'

export default class ProductList extends Component {
    renderUI() {
        const { productData ,getDetail} = this.props
        return productData.map((product) => {
            return <ProductItem key={product.id} product={product} getDetail={getDetail}/>
        })
    }
    render() {

        return (
            <div className="row">
                {this.renderUI()}
            </div>
        )
    }
}
