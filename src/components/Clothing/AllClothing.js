import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
// import Tops from './Tops';

export default class AllClothing extends Component {
    constructor() {
        super();
        
        this.state = {
        allClothes: []
        }
    }

    componentDidMount() {
        axios
        .get(
        `http://localhost:3005/allclothes?class=${this.props.match.params.class}`
        )
        .then(results => {
        this.setState({
            allClothes: results.data
        })
        })
    }

    render() {
        const allClothes = this.state.allClothes.map((clothes, i) => (
        <Link to={`/student/${clothes.id}`} key={i}>
        <h3>
            {clothes.tops} {clothes.bottoms} {clothes.shoes} {clothes.accessories}
        </h3>
        </Link>
        
        ))
        return (
        <div className="box">
            <h1>{this.props.match.params.class}</h1>
            <h2>AllClothing:</h2>
        {allClothes}
        </div>
        )
    }
}