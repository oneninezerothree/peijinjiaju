import React, { Component } from 'react';

export default class ToTop extends Component {
    toTOP() {
        this.refs.roundness.parentElement.parentElement.scrollTop = 0;
    }
    render() {
        return <div ref='roundness' style={{
            position: 'fixed',
            bottom: '3rem',
            zIndex: '10000000',
            right: '.5rem',
            backgroundColor: '#333333',
            display: 'none',
            textAlign: 'center',
            lineHeight: '1.6rem',
            height: '1.6rem',
            width: '1.6rem',
            color: '#fff',
            fontsize: '.8rem',
            borderRadius: '50%',
        }} className='faisco-icons-S000184' onClick={
            this.toTOP.bind(this)
        }>

        </div >
    }
}