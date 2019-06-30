import React from 'react'
import denlus from '../assets/denlu.css'
import { Link } from "dva/router"


export default class denlu extends React.Component {
    // 点击INPUT
    ofcouss() {
        this.refs.username.style.borderColor = '#9dbff6'
    }
    ofcousss() {
        this.refs.password.style.borderColor = '#9dbff6'
    }
    ofcoussss() {
        this.refs.username.style.borderColor = '#ccc'
    }
    ofcousssss() {
        this.refs.password.style.borderColor = '#ccc'
    }

    render() {
        return (
            <div className='denlu' style={{
                height: '100%',
                display: 'flex',
                flexDirection: "column"
            }}>
                <div style={{
                    height: '2.5rem',
                    background: '#000',
                    position: 'relative',
                }}>
                    <Link to='/' style={
                        { position: 'absolute' }
                    }>
                        <div className='faisco-icons-back5' style={{
                            color: '#fff',
                            fontSize: '1.6rem',
                            lineHeight: '2.5rem'
                        }}>
                        </div>
                    </Link>
                    <div style={{
                        color: '#fff',
                        fontSize: '1rem',
                        textAlign: 'center',
                        lineHeight: "2.5rem",

                    }}>
                        会员登录
                    </div>

                </div>
                <div style={{
                    flex: '1',
                    padding: ".75rem"
                }}>
                    <div>
                        <div ref='username' className={denlus.usernames} >
                            <div style={{
                                width: "3rem",
                                fontSize: ".7rem",
                                lineHeight: "2.5rem",
                                textAlign: 'center'

                            }}>
                                账号
                            </div>
                            <div style={{
                                flex: '1'
                            }}>
                                <input className={denlus.inputs} onFocus={
                                    this.ofcouss.bind(this)
                                } onBlur={
                                    this.ofcoussss.bind(this)
                                } type='text' placeholder='请输入账号' />
                            </div>
                        </div>
                        <div ref='password' className={denlus.usernames}>
                            <div style={{
                                width: "3rem",
                                fontSize: ".7rem",
                                lineHeight: "2.5rem",
                                textAlign: 'center'

                            }}>
                                密码
                            </div>
                            <div style={{
                                flex: '1'
                            }}>
                                <input type='text' className={denlus.inputs} onFocus={
                                    this.ofcousss.bind(this)
                                } onBlur={
                                    this.ofcousssss.bind(this)
                                } placeholder='请输入密码' />
                            </div>
                        </div>
                        <div style={{
                            color: '#fff',
                            background: '#000',
                            textAlign: "center",
                            fontWeight: '400',
                            fontSize: '.85rem',
                            height: '2rem',
                            lineHeight: "2rem",
                            borderRadius: '2px',
                            marginTop: '.5rem'
                        }} >
                            登录
                        </div>
                        <div
                            style={
                                {
                                    textAlign: 'right',
                                    color: '#272727',
                                    fontSize: '.7rem',
                                    marginTop: '.5rem'
                                }
                            }
                        > <span>忘记密码？</span>  <Link to='/zuce'>
                                <span>免费注册</span>
                            </Link> </div>
                    </div>
                </div>
            </div >
        )
    }
}