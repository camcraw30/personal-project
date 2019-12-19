import React, {Component} from 'react';
import axios from 'axios';

export default class FrontPage extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("/api/products/all").then(response => {
            console.log(response.data)
            this.setState({
                products: response.data
            })
        }).catch(err => {

        })
    }

    handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "tops") {
            axios.get("/api/products/tops").then(response => {
                console.log(response.data)
                this.setState({
                    products: response.data
                })
            })
        }
        if (e.target.value === "bottoms") {
            axios.get("/api/products/bottoms").then(response => {
                console.log(response.data)
                this.setState({
                    products: response.data
                })
            })
        }
        if (e.target.value === "shoes") {
            axios.get("/api/products/shoes").then(response => {
                console.log(response.data)
                this.setState({
                    products: response.data
                })
            })
        }
        if (e.target.value === "accessories") {
            axios.get("/api/products/accessories").then(response => {
                console.log(response.data)
                this.setState({
                    products: response.data
                })
            })
        }
        if (e.target.value === "all") {
            axios.get("/api/products/all").then(response => {
                console.log(response.data)
                this.setState({
                    products: response.data
                })
            })
        }
    }

    addToCart = id => {
        console.log(id);
        axios.post("/api/cart", {id}).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <select onChange={this.handleChange}>
                    <option value='all'>All Items</option>
                    <option value='tops'>Tops</option>
                    <option value='bottoms'>Bottoms</option>
                    <option value='shoes'>Shoes</option>
                    <option value='accessories'>Accessories</option>
                </select>
                <div className='product_container'>
                    {this.state.products.map(product => {
                        console.log(product.product_id)
                        return (
                            <div className='product_card'>
                                <img src={product.image} />
                                <h1>{product.name}</h1>
                                <h1>{product.price}</h1>
                                <button onClick={() => this.addToCart(product.product_id)}>Add To Cart</button>
                            </div>
                        )
                    })}
                </div>
        </div>
        )
    }
}

