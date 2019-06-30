import React, { Component } from 'react';

import Footers from './../HomePage/HomePage'
import Headers from './../../components/Headers';
import yycl from './yycl/yycl.less';
import creatDiv from '../../components/tanchuang';
import Login from '../../components/Login';
import Lianxi from '../../components/lianxi';
import ToTop from './../../components/ToTop';



export default class HomePage extends Component {
    state = {
        //验证码图片地址
        imgsrc: '',
        //验证码
        code: '',
        // 电话号码正则
        phonetext: /^1(3|4|5|7|8)\d{9}$/,
        // 邮箱正则
        emailreg: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
        // 用户名
        name: '',
        // 电话号码
        phone: '',
        // 输入的验证码
        inputcode: '',
        // 留言用户名
        username: '',
        // 内容
        content: '',
        // 邮箱
        email: '',
        // 留言手机号码
        phonenum: '',
    }
    //获取随机验证码图片
    getSrc() {
        let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let code = "";
        for (var i = 0; i < 4; i++) {
            code += chars[Math.ceil(Math.random() * 35)];
        }
        console.log(code);
        let url = 'http://www.webxml.com.cn/WebServices/ValidateCodeWebService.asmx/cnValidateImage?byString=' + code;
        this.setState({ imgsrc: url, code })
    }
    componentDidMount() {
        this.getSrc();
    }
    // 绑定数据
    setname(e) {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })

    }
    // 绑定数据
    setnumber(e) {
        console.log(e.target.value)
        this.setState({
            phone: e.target.value
        })
    }
    // 资源from  表单验证
    submit() {
        if (this.state.name === '') {
            // 弹窗插件
            creatDiv('请输入姓名');
        } else if (this.state.phone === '' || !this.state.phonetext.test(this.state.phone)) {
            // 弹窗插件
            creatDiv('请输入正确的号码');
        } else {
            // 弹窗插件
            creatDiv('提交成功');
            this.setState({
                phone: '',
                name: ''
            })
        }
    }
    // 绑定数据
    setusername(e) {
        this.setState({
            username: e.target.value
        })
    }
    // 绑定数据
    setcontent(e) {
        this.setState({
            content: e.target.value
        })
    }
    // 绑定数据
    setemail(e) {
        this.setState({
            email: e.target.value
        })
    }
    // 绑定数据
    setphonenum(e) {
        this.setState({
            phonenum: e.target.value
        })
    }
    // 绑定数据
    setinputcode(e) {
        this.setState({
            inputcode: e.target.value
        })
    }
    // 留言from 表单 验证
    gosubmit() {
        if (this.state.username === '') {
            creatDiv('请输入姓名');
        } else if (this.state.content === '') {
            creatDiv('请输入内容');
        } else if (this.state.email !== '' && !this.state.emailreg.test(this.state.email)) {
            creatDiv('请输入正确的邮箱地址');
        } else if (this.state.phonenum !== '' && !this.state.phonetext.test(this.state.phonenum)) {
            creatDiv('请输入正确的手机号码');
        } else if (this.state.inputcode.toLowerCase() !== this.state.code) {
            creatDiv('验证码错误');
            this.getSrc();
        } else {
            creatDiv('提交成功');
            this.setState({
                inputcode: '',
                username: '',
                content: '',
                email: '',
                phonenum: '',
            })
        }
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
                        <div>
                            <div className={yycl.tit}>
                                <span >免费在线预约上门测量</span>
                            </div>
                            <div className={yycl.from}>

                                <label htmlFor='lxr'>联系人</label>
                                <div className={yycl.val}><input onChange={this.setname.bind(this)} value={this.state.name} type="text" placeholder='您的称呼' name="lxr" /> <span>*</span></div>

                            </div>
                            <div className={yycl.from}>

                                <label htmlFor='lxdh'>联系电话</label>
                                <div className={yycl.val}><input onChange={this.setnumber.bind(this)} value={this.state.phone} type="text" placeholder='手机号码' name="lxdh" /> <span>*</span></div>

                            </div>

                            <div className={yycl.btbox}>
                                <input id='free' onClick={this.submit.bind(this)} className={yycl.but} type="button" value='免费咨询10秒专业客服电话回复' />
                            </div>
                        </div>

                        <div className={yycl.ly}>
                            <div className={yycl.btbox}>
                                <div className={yycl.tit}>
                                    <span >留言板</span>
                                </div>
                                <label className={`faisco-icons-S000214 ${yycl.labels} `}>
                                    <span className={yycl.inputicon}></span>
                                    <input onChange={this.setusername.bind(this)} value={this.state.username} className={`${yycl.lyinp} `} type="text" placeholder='姓名（必填）' />
                                </label>
                                <label className={`faisco-icons-mail2 ${yycl.labels} `}>
                                    <span className={yycl.inputicon}></span>
                                    <input onChange={this.setemail.bind(this)} value={this.state.email} className={`${yycl.lyinp} `} type="text" placeholder='邮箱' />
                                </label>
                                <label className={`faisco-icons-call2 ${yycl.labels} `}>
                                    <span className={yycl.inputicon}></span>
                                    <input onChange={this.setphonenum.bind(this)} value={this.state.phonenum} className={`${yycl.lyinp} `} type="text" placeholder='电话' />
                                </label>
                                <label className={`faisco-icons-message2 ${yycl.labels} `}>
                                    <span style={{ lineHeight: '2.384615rem' }} className={yycl.inputicon}></span>
                                    <textarea onChange={this.setcontent.bind(this)} value={this.state.content} id='content' className={yycl.text} maxLength="10000" placeholder="内容："></textarea>
                                </label>
                                <div className={yycl.labels} style={{ position: 'relative' }}>
                                    <input onChange={this.setinputcode.bind(this)} value={this.state.inputcode} className={`${yycl.lyinp}`} maxLength='4' type="text" name="" id="" placeholder='请输入验证码' />
                                    <img className={yycl.code} src={this.state.imgsrc} alt="" onClick={this.getSrc.bind(this)} />
                                </div>
                                <input onClick={this.gosubmit.bind(this)} style={{ marginTop: '0.884615rem' }} className={yycl.but} type="button" value='提交' />
                            </div>
                        </div>
                        <Lianxi />
                        <ToTop ref='toTops' />

                    </div>
                </div>
                <Footers />
            </div >
        )
    }

}