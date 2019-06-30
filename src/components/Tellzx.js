import React from 'react'

export default class Tellzx extends React.Component {

    render() {
        return (
            <div ref='zezhao' style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                zIndex: '10000000',
                top: '0',
                left: '0',
                background: '#0002',
                display: 'none',
                flexDirection: 'column',
            }}>
                <div style={{
                    flex: '1',
                }}>

                </div>
                <div style={{
                    height: '7.25rem',
                    background: '#fff'
                }}>


                    <div style={{
                        height: '2.25rem',
                        width: '100%',
                        display: 'flex',
                        lineHeight: '2.25rem',
                        textAlign: 'center',
                        fontSize: '.6rem'
                    }}>
                        <div style={{
                            flex: '30%'
                        }}>
                            电话咨询
                        </div>
                        <div style={{
                            flex: '40%'
                        }}>
                            <a href='tel:020-38452029'>020-38452029</a>
                        </div>
                        <div style={{
                            flex: '30%',
                            lineHeight: '2.25rem',
                            textAlign: 'center',
                            fontSize: '.6rem'
                        }} className={'faisco-icons-S000106'} >

                        </div>
                    </div>

                    <div style={{
                        height: '2.25rem',
                        width: '100%',
                        display: 'flex',
                        lineHeight: '2.25rem',
                        textAlign: 'center',
                        fontSize: '.6rem'
                    }}>
                        <div style={{
                            flex: '30%'
                        }}>
                            电话咨询
                        </div>
                        <div style={{
                            flex: '40%'
                        }}>

                            <a href='tel:18122255285'>18122255285</a>

                        </div>
                        <div style={{
                            flex: '30%',
                            lineHeight: '2.25rem',
                            textAlign: 'center',
                            fontSize: '.6rem'
                        }} className={'faisco-icons-S000106'} >

                        </div>
                    </div>
                    <div style={{
                        height: '2.25rem',
                        lineHeight: '2.25rem',
                        width: '100%',
                        display: 'inline-block',
                        fontSize: '.7rem',
                        color: '#585858',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        cursor: 'default',
                        background: '#fff'
                    }
                    } onClick={
                        () => {
                            // console.log();
                            this.refs.zezhao.style.display = 'none';
                        }}>取消</div>
                </div>

            </div>


        )
    }
}