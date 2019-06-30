import React from 'react';
import { Link } from "dva/router"


export default class Login extends React.Component {

    state = {

    }
    render() {
        return (
            <div style={
                {
                    background: 'rgba(0,0,0,.2)',
                    height: '1.4rem',
                    fontSize: '.7rem',
                    fontFamily: "Helvetica','#FFF','Arial','Tahoma'",
                    lineHeight: '1.4rem',
                    color: '#fff'
                }
            }>
                <i className='faisco-icons-contact1' style={{
                    fontSize: '.9rem',
                    verticalAlign: 'bottom',
                    color: '#fff'
                }}></i>
                <Link to='/denlu' style={{
                    color: '#fff',
                    textDecoration: 'none'
                }}>
                    登录
                </Link>

                <i className='faisco-icons-edit1' style={{
                    fontSize: '.9rem',
                    verticalAlign: 'bottom',
                    color: '#fff'

                }}></i>
                <Link to='/zuce' style={{
                    color: '#fff',
                    textDecoration: 'none'
                }} >
                    注册
                </Link>
            </div>
        )
    }
}