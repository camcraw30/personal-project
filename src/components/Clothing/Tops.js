import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

export default class Tops extends Component {
    constructor() {
        super();
        
        this.state = {
        tops: []
        }
    }

    componentDidMount() {
        axios
        .get(
        `http://localhost:3005/tops?class=${this.props.match.params.tops}`
        )
        .then(results => {
        this.setState({
            tops: results.data
        })
        })
    }

    render() {
        const tops = this.state.tops.map((top, i) => (
        <Link to={`/top/${top.id}`} key={i}>
        <h3>
            {tops.hoodies} {tops.t_shirts} {tops.long_sleeves}
        </h3>
        </Link>
        
        ))
        return (
        <div className="box">
            <h1>{this.props.match.params.tops}</h1>
            <h2>Tops:</h2>
        {Tops}
        </div>
        )
    }
}