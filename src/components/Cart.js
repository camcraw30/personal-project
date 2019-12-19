import React, { Component } from 'react';
import Axios from 'axios';

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        Axios.get("/api/cart").then(response => {
            console.log(response.data)
            //save response.data in state
            this.setState({cart: response.data})
            //map over it in the render
        }).catch(err => {
            console.log(err);
        })
    }
    updateAmount = (e, id) => {
        // console.log(e.target.value)
        Axios.put("/api/cart", {
            amount: e.target.value,
            product_id: id
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }
    removeFromCart = id => {
        Axios.delete("/api/cart/" + id).then(response => {
            console.log(response)
            this.setState({cart: response.data})
        }).catch(err => {
            console.log(err);
        })
    } 
    render() {
        return (
        <div>
            {this.state.cart.map(product => {
                console.log(product.product_id);
                return (
                    <div>
                        <img src={product.image} />
                        <h1>{product.price}</h1>
                        <h1>{product.name}</h1>
                        <select onChange={(e) => this.updateAmount(e, product.product_id)}>
                            <option selected={product.amount === 1 ? true : false} value={1}>1</option>
                            <option selected={product.amount === 2 ? true : false} value={2}>2</option>
                            <option selected={product.amount === 3 ? true : false}value={3}>3</option>
                            <option selected={product.amount === 4 ? true : false}value={4}>4</option>
                            <option selected={product.amount === 5 ? true : false}value={5}>5</option>
                            <option selected={product.amount === 6 ? true : false}value={6}>6</option>
                            <option selected={product.amount === 7 ? true : false}value={7}>7</option>
                            <option selected={product.amount === 8 ? true : false}value={8}>8</option>
                            <option selected={product.amount === 9 ? true : false}value={9}>9</option>
                            <option selected={product.amount === 10 ? true : false}value={10}>10</option>
                        </select>
                        <button onClick={() => this.removeFromCart(product.product_id)}>Delete From Cart</button>
                    </div>
                )
            })}
        </div>
        )
    }
}