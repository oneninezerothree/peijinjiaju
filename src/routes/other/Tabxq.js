import React from 'react';
import { connect } from 'dva';
import Footers from './../HomePage/HomePage';
import { Link } from 'dva/router'

export default connect((state) => {
    return state;
})(class Xqy extends React.Component {
    state = {

    }
    componentDidMount() {

        console.log(this.props.location.search.slice(1));


    }
    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>


                <div style={{
                    height: '2.4rem',
                    position: 'fixed',
                    background: '#ccc7',
                    width: '100%',
                    zIndex: '6000'
                }}>
                    <Link to={'/Leb?'+ this.props.location.search.slice(1).split('&')[2] + 'bagonge'}>
                        <div style={{
                            position: 'absolute',
                            width: '1.35rem',
                            height: '1.35rem',
                            left: '.45rem',
                            top: '.4rem',
                            fontSize: '1rem',
                            color: '#3c414a',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,.7)',
                            textAlign: "center",
                            lineHeight: '1.35rem'


                        }} className='faisco-icons-back5'>

                        </div>
                    </Link>


                    <div style={{
                        position: 'absolute',
                        width: '1.35rem',
                        height: '1.35rem',
                        right: '.45rem',
                        top: '.4rem',
                        fontSize: '1rem',
                        color: '#3c414a',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,.7)',
                        textAlign: "center",
                        lineHeight: '1.35rem'
                    }} className='faisco-icons-more1'>

                    </div>

                </div>
                <div style={{
                    flex: '1',
                    overflow: 'auto'
                }}>
                    <div style={{
                        position: 'relative'
                    }}>
                        <img alt={decodeURI(this.props.location.search.slice(1).split('&')[1])} src={this.props.location.search.slice(1).split('&')[0]} style={{
                            width: '100%'
                        }}>

                        </img>
                        <div style={{
                            height: '1rem',
                            position: "absolute",
                            bottom: '.8rem',
                            zIndex: '15',
                            width: '100%',
                            color: '#333',
                            fontSize: '.7rem',
                            paddingLeft: '1rem',
                            boxSizing: 'border-box'
                        }}>
                            {
                                decodeURI(this.props.location.search.slice(1).split('&')[1])
                            }
                        </div>
                    </div>
                    <div style={{
                        marginTop: '.35rem',
                    }}>
                        <div style={{
                            display: 'flex',
                            textAlign: 'center',
                            height: '2.2rem',
                            lineHeight: '2.2rem',
                            color: '#333',
                            fontSize: '.75rem',
                            borderBottom: '1px solid #ccc'
                        }}>
                            <div style={{
                                flex: '1'
                            }}>产品详情</div>
                            <div style={{
                                flex: '1'
                            }}>产品参数</div>
                            <div style={{
                                flex: '1'
                            }}>产品评论</div>

                        </div>
                        <div style={{
                            height: '600px'
                        }}>

                        </div>

                    </div>


                </div>
                <Footers />
            </div>
        )
    }
}) 