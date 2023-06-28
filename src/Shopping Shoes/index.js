import React, { Component } from 'react'
import ProductList from './productList'
import Modal from './modal'
import data from './../data.json'
export default class ShoesStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: data,
            addList: [],
        }
    }
    _findIndex = (id) => this.state.addList.findIndex((product) => product.id === id)
    handleAdd = (product) => {
        let addList = [...this.state.addList]
        let index = this._findIndex(product.id);

        if (index !== -1) {
            addList[index].quantity++;
        } else {
            const productAdd = {
                id: product.id,
                name: product.name,
                image: product.image,
                description: product.description,
                quantity: 1,
                price: product.price,

            }
            addList.push(productAdd)

        }
        this.setState({
            addList,
        })
    }
    handleQuantity = (id, check) => {
        let quantityList = [...this.state.addList]
        let index = this._findIndex(id);
        if (index !== -1) {
            if (check) {
                quantityList[index].quantity++;
            } else {
                if (quantityList[index].quantity > 1) {

                    quantityList[index].quantity--;
                }

            }
            this.setState({
                addList: quantityList,
            })
        }
    }
    handleDelete = (id) => {
        let delList = [...this.state.addList]
        let index = this._findIndex(id)
        if (index !== -1) {
            delList.splice(index, 1)
            this.setState({
                addList: delList,
            })
        }
    }
    totalCart = () => this.state.addList.reduce((total, product) => total += product.quantity, 0)
    
    render() {
        const { productList, addList } = this.state

        return (
            <>

                <header className='position-fixed w-100 ' style={{zIndex:'10'}}>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">CyberShoes</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Shop</a>
                                </li>
                               
                            </ul>
                            <form className="form-inline my-2 my-lg-0">


                                <button className="btn btn-danger my-2 my-sm-0" type="submit" data-toggle="modal"
                                    data-target="#modelId"> <i className="fa-solid fa-cart-shopping"></i>  {this.totalCart()}</button>
                            </form>
                        </div>
                    </nav>



                </header >
                <div className="container" style={{paddingTop: '100px'}}>
                    <h2>Collections</h2>
                    <ProductList productData={productList} getDetail={this.handleAdd} />
                </div>

                <Modal product={addList} getQuantity={this.handleQuantity} deleteProduct={this.handleDelete} />

                <footer className='text-center bg-dark p-5' style={{color:'#fff', fontSize:'32px', marginTop:'100px'}}>CyberShoes</footer>
            </>
        )
    }
}
