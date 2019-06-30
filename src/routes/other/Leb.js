import React, { Component } from 'react';
import { Link } from 'dva/router'

import Footers from './../HomePage/HomePage'
import Headers from './../../components/Headers';

import Login from '../../components/Login';
import Lianxi from '../../components/lianxi';
import ToTop from './../../components/ToTop';


// 样式
import { connect } from 'dva';


export default connect((state) => {
    return state;
})(class HomePage extends Component {
    state = {
        imgs: this.props.location.search.slice(2) === 'bagonge' ? this.props.example.tabel[this.props.location.search.slice(1, 2)].name : ''
    }

    onscrolls() {
        if (this.refs.scrolls.scrollTop >= 200) {
            this.refs.toTops.refs.roundness.style.display = 'block'
        } else {
            this.refs.toTops.refs.roundness.style.display = 'none'
        }
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
                    overflowX: 'hidden',
                    background: '#f4f4f4'
                }} ref='scrolls' onScroll={this.onscrolls.bind(this)}  >
                    <div>

                        <Login />
                        <div style={{
                            width: "100%",
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>

                            {
                                this.state.imgs.map((items, index) => {
                                    return (

                                        <div style={{
                                            width: '50%'
                                        }} key={index} >
                                            <Link to={'/tabxqy?' + items.imgsrc + '&' + items.name + '&' + this.props.location.search.slice(1, 2)}>
                                                <div>
                                                    <span></span>
                                                    <div style={{
                                                        position: 'relative'
                                                    }}>
                                                        <img style={{
                                                            width: '90%',
                                                            margin: '5%'
                                                        }} alt='DK-01前台' src={items.imgsrc} ></img>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p style={{
                                                        textAlign: 'center'
                                                    }}>{items.name}</p>
                                                </div>
                                            </Link>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Lianxi />
                        <ToTop ref='toTops' />

                    </div>
                </div>
                <Footers />
            </div >
        )
    }

}) 