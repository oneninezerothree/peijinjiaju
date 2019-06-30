import React from 'react';

export default class Online extends React.Component {
    render() {
        return (
            <div style={{
                marginTop:'5px'
            }}>
                <div style={{
                    height: '2rem',
                    lineHeight: '2rem',
                    background: '#fff',
                    color: '#272727',
                    textIndent: '.6rem',
                    fontWeight: '500',
                    fontSize: '.8rem',
                    position: 'relative'
                }}>
                    <span style={{
                        width: '.2rem',
                        height: '.8rem',
                        display: 'inline-block',
                        background: '#272727',
                        backgroundSize: '1.3rem',
                        backgroundPosition: '.25rem 50%',
                        position: 'absolute',
                        top: '.6rem',
                        left: '0px',
                    }}></span> 在线预约
                </div>



                <div>
                    <div style={{
                        display: 'flex',
                        height: '3rem',
                        lineHeight: '3rem',
                    }}>
                        <div style={{
                            width: '20%',
                            textAlign: 'right',
                            fontSize: '.7rem',
                            paddingRight: '5%'
                        }} >联系人</div>
                        <div style={{
                            width: '75%'
                        }}>
                            <input style={{
                                height: '1.6rem',
                                marginTop: '.6rem',
                                width: '85%',
                                border: '1px solid #dadada',
                                backgroundColor: '#f7f7f7',
                                borderRadius: '4px',
                                fontSize: '.6rem',
                                textIndent: '.25rem',
                                padding: '0',
                            }} type='text' placeholder='您的称呼' />
                        </div>
                        <div style={{
                            width: '5%'
                        }}>*</div>
                    </div>

                    <div style={{
                        display: 'flex',
                        height: '3rem',
                        lineHeight: '3rem',
                    }}>
                        <div style={{
                            width: '20%',
                            textAlign: 'right',
                            fontSize: '.7rem',
                            paddingRight: '5%'
                        }} >联系电话</div>
                        <div style={{
                            width: '75%'
                        }}>
                            <input style={{
                                height: '1.6rem',
                                marginTop: '.6rem',
                                width: '85%',
                                border: '1px solid #dadada',
                                backgroundColor: '#f7f7f7',
                                borderRadius: '4px',
                                fontSize: '.6rem',
                                textIndent: '.25rem',
                                padding: '0',
                            }} type='text' placeholder='手机号码' />
                        </div>
                        <div style={{
                            width: '5%'
                        }}>*</div>
                    </div>
                    <div>
                        <div
                            style={{
                                marginTop: '1.425rem',
                                height: '2.125rem',
                                borderRadius: '4px',
                                textAlign: 'center',
                                lineHeight: '2.25rem',
                                color: '#fff',
                                fontSize: '.7rem',
                                background: '#272727',
                                margin: '.75rem'
                            }}
                        >免费咨询10秒专业客服电话回复</div>
                    </div>
                </div>
            </div>
        )
    }
}