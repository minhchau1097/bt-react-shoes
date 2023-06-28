import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const button = {
            bottom: '0px',
            left: '20px',
            // right: '25%',
            // textAlign: 'center',
        }
        const { product ,getDetail} = this.props
        return (

            <div className="col-sm-4 mt-5">
                <div className="card h-100 position-relative pb-3" style={{borderRadius:'80px 0 80px 0'}}>
                    <img className="card-img-top" src={product.image} alt="" />
                    <div className="card-body mb-3">
                        <h5 className="card-title mb-4">{product.name}</h5>
                        <span>{product.shortDescription}</span>
                        <p className="card-text mb-4 mt-3" style={{fontWeight:'bold'}}>{product.price}$</p>
                    </div>
                    <div className='position-absolute pb-2' style={button} >
                        <button className='btn btn-danger'  data-toggle="modal"
            data-target="#modelId" onClick={()=>{
                getDetail(product)
            }}>Add to cart</button>
                    </div>
                </div>
            </div>

        )
    }
}
