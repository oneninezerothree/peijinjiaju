import React, { Component } from 'react';
import homecss from "./HomePage.css";
import { Link } from 'dva/router';
import Lxfs from './../../components/Tellzx';




export default class HomePage extends Component {
    state = {
        name: [{
            name: '首页',
            img: 'faisco-icons-home4',
            url: {
                pathname: '/',
                search: '',
                hash: '#the-hash',

            }
        },
        {
            name: '产品目录',
            img: 'faisco-icons-menu1',
            url: {
                pathname: '/cpml',
                search: '',
                hash: '#the-hash',

            }

        },
        {
            name: '电话咨询',
            img: 'faisco-icons-call1',
            url: {
                pathname: '',
                search: '',
                hash: '#the-hash',

            }

        },
        {
            name: '在线客服',
            img: 'faisco-icons-S000214',
            url: {
                pathname: '/zxkf',
                search: '',
                hash: '#the-hash',

            }

        },
        {
            name: '预约量尺',
            img: 'faisco-icons-wechat2',
            url: {
                pathname: '/yycl',
                search: '',
                hash: '#the-hash',
            }

        }
        ]

    }

    render() {
        return (<div className={homecss.shouye}  >
            <Lxfs isok={this.state.isOk} ref='footnav' />
            {/* <Headers /> */}
            <div className={homecss.footers} > {
                this.state.name.map((items, index) => {
                    if (items.name === '电话咨询') {
                        return (
                            <div className={homecss.list_ft} key={index} onClick={
                                () => {
                                    this.refs.footnav.refs.zezhao.style.display = 'flex'
                                }
                            } >
                                <span style={
                                    {
                                        display: 'block',
                                        width: "100%",
                                        height: "100%",
                                        textDecoration: 'none'
                                    }}>
                                    <div className={homecss.list_top} >
                                        < i className={items.img} >

                                        </i>
                                    </div>
                                    <div className={homecss.list_botom} style={
                                        {
                                            color: '#fff'
                                        }
                                    }>
                                        {items.name}
                                    </div>
                                </span>
                            </div >
                        )
                    } else {
                        return (
                            <div className={homecss.list_ft} key={index}
                            >
                                <Link to={items.url.pathname} style={
                                    {
                                        display: 'block',
                                        width: "100%",
                                        height: "100%",
                                        textDecoration: 'none'
                                    }

                                }>
                                    <div className={homecss.list_top} >
                                        < i className={items.img} >

                                        </i>
                                    </div>
                                    <div className={homecss.list_botom} style={
                                        {
                                            color: '#fff'
                                        }
                                    }>
                                        {items.name}
                                    </div>

                                </Link>

                            </div >
                        )
                    }

                })
            }
            </div>


        </div>
        )
    }

}