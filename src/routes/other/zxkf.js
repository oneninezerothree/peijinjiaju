import React, { Component } from 'react';

import Footers from './../HomePage/HomePage'
import Headers from './../../components/Headers';
import Login from './../../components/Login';


export default class HomePage extends Component {
    state = {

    }
    render() {
        return (
            <div style={
                {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }
            }>
                <Headers />
                <div style={{
                    flex: "1",
                    overflow: 'auto'
                }}>
                    <div style={
                        {
                            height: '7484px'
                        }
                    }>
                        <Login />
                    </div>
                </div>
                <Footers />
            </div >
        )
    }

}