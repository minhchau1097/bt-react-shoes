import React, { Component } from 'react'

export default class Modal extends Component {
    renderTable = ()=>{
        const {product, getQuantity,deleteProduct} = this.props
        
        return product.map((product)=>{
            return(
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <img src={product.image} width={50} alt="" />
                </td>
                <td>{product.description}</td>
                <td>
                  <button style={{background:'#fff'}}
                    onClick={() => {
                        getQuantity(product.id, false)
                    }}
                  >-
                  </button>
                  {product.quantity}
                  <button style={{background:'#fff'}}
                    onClick={() => {
                        getQuantity(product.id, true)
                    }}
                  >+
                  </button> 
                </td>
                <td>{product.price}$</td>
                <td>{product.price * product.quantity}$</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                        deleteProduct(product.id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            
            )
        })  

    }
    render() {
        return (
            <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1500px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th className='text-center'>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

        )
    }
}
