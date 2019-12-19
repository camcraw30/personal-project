import React, { Component } from 'react';

export default class Contact extends Component {
render() {
    return (
        <div>
            <h1 className='title'>Contact Information of Clothing Store:</h1>
            <div className='sub_box'>
                <p><strong>Address:</strong> 500 South Ervay St, Dallas TX</p>
                <p><strong>Number:</strong> 1-800-234-5678</p>
                <p><strong>Email:</strong> camacraw625@gmail.com</p>
            </div>
        </div>
        )
    }
}