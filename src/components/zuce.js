import React from 'react'
import denlus from '../assets/denlu.css'
import { Link } from "dva/router"


export default class denlu extends React.Component {
    // 点击INPUT


    state = {
        zucetab: [
            {
                name: '账号',
                username: '请输入账号（必填）',
                value: '',
                ref: 'us1'
            }, {
                name: '密码',
                username: '请输入密码（必填）',
                value: '',
                ref: 'us2'


            }, {
                name: '密码',
                username: '请输入确认密码（必填）',
                value: '',
                ref: 'us3'


            }, {
                name: '姓名',
                username: '请输入姓名（必填）',
                value: '',
                ref: 'us4'


            }, {
                name: '邮箱',
                username: '请输入邮箱（必填）',
                value: '',
                ref: 'us5'


            }, {
                name: '电话',
                username: '请输入电话（必填）',
                value: '',
                ref: 'us6'


            }, {
                name: '手机区号',
                username: '',
                value: 'ch',
                ref: 'us7'


            }, {
                name: '手机',
                username: '请输入账号（必填）',
                value: '',
                ref: 'us8'


            }, {
                name: '留言',
                username: '请输入留言',
                value: '',
                ref: 'us9'

            }
        ]
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


                        {
                            this.state.zucetab.map((item, index) => {

                                if (item.name === '手机区号') {
                                    return (
                                        <div ref={item.ref} className={denlus.usernames} key={index} >
                                            <div style={{
                                                width: "5rem",
                                                fontSize: ".7rem",
                                                lineHeight: "2.5rem",
                                                textAlign: 'center'
                                            }}>
                                                {
                                                    item.name
                                                }
                                            </div>

                                            <div style={{
                                                flex: '1'
                                            }}>
                                                <select id="mobileCt" name="mobileCt" onChange={
                                                    () => {
                                                        this.setState({
                                                            zucetab: this.state.zucetab.map((item, itemIndex) => {
                                                                if (index === itemIndex) {
                                                                    item.value = this.refs['us' + (index + 1)].children[1].children[0].value;
                                                                } else {
                                                                }
                                                                return item;
                                                            })
                                                        })
                                                        console.log(this.state.zucetab);
                                                    }
                                                } style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    border: 'none',
                                                    outline: 'none',
                                                    fontSize: '.7rem',
                                                    color: '#999'
                                                }}><option value="ch">中国大陆+86</option><option value="hk">香港+852</option><option value="mc">澳门+853</option><option value="tw">台湾+886</option><option value="kr">韩国+82</option><option value="jp">日本+81</option><option value="ac">美国+1</option><option value="cnd">加拿大+1</option><option value="el">英国+44</option><option value="mls">马来西亚+60</option><option value="tl">泰国+66</option><option value="vtn">越南+84</option><option value="fc">法国+33</option><option value="plp">菲律宾+63</option><option value="idns">印度尼西亚+62</option><option value="itl">意大利+39</option><option value="rs">俄罗斯+7</option><option value="zl">新西兰+64</option><option value="nl">荷兰+31</option><option value="swd">瑞典+46</option><option value="atl">澳大利亚+61</option><option value="gm">德国+49</option><option value="snp">新加坡+65</option><option value="fld">芬兰+358</option><option value="dmk">丹麦+45</option><option value="isr">以色列+00972</option></select>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div ref={item.ref} className={denlus.usernames} key={index} >
                                            <div style={{
                                                width: "5rem",
                                                fontSize: ".7rem",
                                                lineHeight: "2.5rem",
                                                textAlign: 'center'
                                            }}>
                                                {
                                                    item.name
                                                }
                                            </div>

                                            <div style={{
                                                flex: '1'
                                            }}>
                                                <input className={denlus.inputs} type='text' placeholder={item.username} onChange={
                                                    () => {
                                                        console.log(this.refs['us' + (index + 1)].children[1].children[0].value);
                                                        // console.log(this);
                                                        // console.log();
                                                        // this.state.zucetab[index].value
                                                        this.setState({
                                                            zucetab: this.state.zucetab.map((item, itemIndex) => {
                                                                if (index === itemIndex) {
                                                                    item.value = this.refs['us' + (index + 1)].children[1].children[0].value;
                                                                } else {
                                                                }
                                                                return item;
                                                            })
                                                        })
                                                        console.log(this.state.zucetab);

                                                    }
                                                } />
                                            </div>
                                        </div>
                                    )
                                }

                            }
                            )
                        }

                        <div style={{
                            marginTop: '1rem'
                        }}><input type="checkbox" id="memberAgreePro" />
                            <label ><span className="icon-checkIcon g_mainColor"></span>我已经阅读并同意</label>
                            <a hidefocus="true" id="signUpMProtocol" >《会员注册协议》</a>
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
                            注册
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}