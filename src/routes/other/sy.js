import React, { Component } from 'react';
import { connect } from 'dva';

import Footers from './../HomePage/HomePage';
import Headers from './../../components/Headers';
import Login from './../../components/Login';
import Online from './../../components/online';
import Lianxi from './../../components/lianxi';
import ToTop from './../../components/ToTop';


//轮播图组件
import Lunbo from './../../components/Lunbo/Lunbo'
//八宫格
import Bagongge from './../../components/Bagongge/Bagongge'
//四方块图
import Sifangkuai from './../../components/Sifangkuai/Sifangkuai'
//白色系列
import Baisexilie from './../../components/Baisexilie/Baisexilie'
//大组件
import Dazujian from './../../components/Dazujian/Dazujian'

import Dazujian2 from './../../components/Dazujian/Dazujian2'
//顶部
import Huidao from './../../components/Huidaodingbu/Huidao'


export default connect((state) => {
    return state;
})(class HomePage extends Component {
    state = {

    }
    constructor(props) {
        super(props)
        this.state = {
            url: [
                {
                    name: '橡木色系列',
                    img: [
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgj5yH4QUopp-bZTDYBDjlAg.jpg',
                            cls: "cubeLink1",
                            id1: 'cubeNavigation425CubeLink1',
                            ida: 'cubeLinkA1CubeNav425'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgwJyH4QUohOLf6AQw2AQ45QI.jpg',
                            cls: "cubeLink2",
                            id1: 'cubeNavigation425CubeLink2',
                            ida: 'cubeLinkA2CubeNav425'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgyY-G1wUo0M6qhwEw3gI43gI.jpg',
                            cls: "cubeLink3",
                            id1: 'cubeNavigation425CubeLink3',
                            ida: 'cubeLinkA3CubeNav425'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgj5yH4QUopp-bZTDYBDjlAg.jpg',
                            cls: "cubeLink4",
                            id1: 'cubeNavigation425CubeLink4',
                            ida: 'cubeLinkA4CubeNav425'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg9Z6H4QUovoX1iwEw2AQ45QI.jpg',
                            cls: "cubeLink5",
                            id1: 'cubeNavigation425CubeLink5',
                            ida: 'cubeLinkA5CubeNav425'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgmqOH4QUoiN_h4gUw2AQ45QI.jpg',
                            cls: "cubeLink6",
                            id1: 'cubeNavigation425CubeLink6',
                            ida: 'cubeLinkA6CubeNav425'
                        }
                    ]

                }, {
                    name: '松木色系列',
                    img: [
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg7KeH4QUow7LcSjDYBDjlAg.jpg',
                            cls: "cubeLink1",
                            id1: 'cubeNavigation426CubeLink1',
                            ida: 'cubeLinkA1CubeNav426'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgw6qH4QUooO6DnwUw2AQ45QI.jpg',
                            cls: "cubeLink2",
                            id1: 'cubeNavigation426CubeLink2',
                            ida: 'cubeLinkA2CubeNav426'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgm6uH4QUok_eF_gcw2AQ45QI.jpg',
                            cls: "cubeLink3",
                            id1: 'cubeNavigation426CubeLink3',
                            ida: 'cubeLinkA3CubeNav426'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgvayH4QUoyPfsSTDYBDjlAg.jpg',
                            cls: "cubeLink4",
                            id1: 'cubeNavigation426CubeLink4',
                            ida: 'cubeLinkA4CubeNav426'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgv62H4QUo8Mbk2gYw2AQ45QI.jpg',
                            cls: "cubeLink5",
                            id1: 'cubeNavigation426CubeLink5',
                            ida: 'cubeLinkA5CubeNav426'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg4K2H4QUo3NnW2wEw2AQ45QI.jpg',
                            cls: "cubeLink6",
                            id1: 'cubeNavigation426CubeLink6',
                            ida: 'cubeLinkA6CubeNav426'
                        }
                    ]

                }, {
                    name: '刀砍木色系列',
                    img: [
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg8baH4QUo7O39iAEw2AQ45QI.jpg',
                            cls: "cubeLink1",
                            id1: 'cubeNavigation412CubeLink1',
                            ida: 'cubeLinkA1CubeNav412'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgj7iH4QUosub6tQQw2AQ45QI.jpg',
                            cls: "cubeLink2",
                            id1: 'cubeNavigation412CubeLink2',
                            ida: 'cubeLinkA2CubeNav412'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg-LiH4QUoyJySlwMw2AQ45QI.jpg',
                            cls: "cubeLink3",
                            id1: 'cubeNavigation412CubeLink3',
                            ida: 'cubeLinkA3CubeNav412'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgjbyH4QUoxPT_OjDYBDjlAg.jpg',
                            cls: "cubeLink4",
                            id1: 'cubeNavigation412CubeLink4',
                            ida: 'cubeLinkA4CubeNav412'
                        }
                    ]

                }, {
                    name: '胡桃色系列',
                    img: [
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgq8qH4QUo8dvqigIw2AQ45QI.jpg',
                            cls: "cubeLink1",
                            id1: 'cubeNavigation499CubeLink1',
                            ida: 'cubeLinkA1CubeNav499'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg08qH4QUo3NTB3AMw2AQ45QI.jpg',
                            cls: "cubeLink2",
                            id1: 'cubeNavigation499CubeLink2',
                            ida: 'cubeLinkA2CubeNav499'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg_sqH4QUowIvW9gEw2AQ45QI.jpg',
                            cls: "cubeLink3",
                            id1: 'cubeNavigation499CubeLink3',
                            ida: 'cubeLinkA3CubeNav499'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgpMuH4QUokKuVsgIw2AQ45QI.jpg',
                            cls: "cubeLink4",
                            id1: 'cubeNavigation499CubeLink4',
                            ida: 'cubeLinkA4CubeNav499'
                        }
                    ]

                }

            ]
            ,
            url2: [
                {
                    name: '工程案例',
                    img: [
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgpuuQ3gUo3Nft7wcwrAI44QE.jpg',
                            cls: "cubeLink1",
                            id1: 'cubeNavigation422CubeLink1',
                            ida: 'cubeLinkA1CubeNav422',
                            anli: '工程案例1'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgqMWR3gUo9ICDTTCADzi4CA!640x640.jpg',
                            cls: "cubeLink2",
                            id1: 'cubeNavigation422CubeLink2',
                            ida: 'cubeLinkA2CubeNav422',
                            anli: '工程案例2'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgvoaR3gUoxOuIkQUwrAI4hAI.jpg',
                            cls: "cubeLink3",
                            id1: 'cubeNavigation422CubeLink3',
                            ida: 'cubeLinkA3CubeNav422',
                            anli: '工程案例3'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgnO2Q3gUotbqUiwYw3gI4hwI.jpg',
                            cls: "cubeLink4",
                            id1: 'cubeNavigation422CubeLink4',
                            ida: 'cubeLinkA4CubeNav422',
                            anli: '工程案例4'
                        }
                    ]

                }
            ],
            url3: [
                {
                    name: '工程案例',
                    img: [
                        {
                            n1: '//1262329.s21i.faiusr.com/4/ABUIABAEGAAg0seR3gUons34HDClAjimAg.png',
                            cls: "cubeLink1",
                            id1: 'cubeNavigation424CubeLink1',
                            ida: 'cubeLinkA1CubeNav424',
                            anli: '工厂图片'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg0sOR3gUoq_e90wcwoAs4uAg!640x640.jpg',
                            cls: "cubeLink2",
                            id1: 'cubeNavigation424CubeLink2',
                            ida: 'cubeLinkA2CubeNav424',
                            anli: '工厂图片'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgtMOR3gUo3O3etgUwoAs4uAg!640x640.jpg',
                            cls: "cubeLink3",
                            id1: 'cubeNavigation424CubeLink3',
                            ida: 'cubeLinkA3CubeNav424',
                            anli: '工厂图片'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgtMOR3gUo7oiY0AIwoAs4uAg!640x640.jpg',
                            cls: "cubeLink4",
                            id1: 'cubeNavigation424CubeLink4',
                            ida: 'cubeLinkA4CubeNav424',
                            anli: '工厂图片'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg4ael3gUopO62-gYwgA84uAg!640x640.jpg',
                            cls: "cubeLink5",
                            id1: 'cubeNavigation424CubeLink5',
                            ida: 'cubeLinkA5CubeNav424',
                            anli: '工厂图片'
                        },
                        {
                            n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg36el3gUo_byRuQcwgwM4jgI.jpg',
                            cls: "cubeLink6",
                            id1: 'cubeNavigation424CubeLink6',
                            ida: 'cubeLinkA6CubeNav424',
                            anli: '工厂图片'
                        }
                    ]


                }
            ]
            ,
            url4: [
                {
                    n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgo__Q3gUo-bHz4QMw3gI4hwI.jpg',
                    cls: "cubeLink6",
                    id1: 'cubeNavigation422CubeLink6',
                    ida: 'cubeLinkA6CubeNav422',
                    anli: "工程案例5"
                }
            ],
            url5: [
                {
                    n1: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg0rWl3gUo3MiJngcw1QY4yAI!640x640.jpg',
                    cls: "cubeLink6",
                    id1: 'cubeNavigation424CubeLink6',
                    ida: 'cubeLinkA6CubeNav424',
                    anli: "工厂图片"
                }
            ]
        }
    }

    onscrolls() {
        if (this.refs.scrolls.scrollTop >= 1200) {
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
                    overflow: 'auto'
                }
            }>
                <Headers />
                <div ref='scrolls' onScroll={this.onscrolls.bind(this)} style={{
                    flex: "1",
                    overflow: 'auto'
                }}>

                    <div style={
                        {
                            overflow: 'hidden'
                        }
                    }>
                        <Login />
                        {/* 这是手动轮播图 */}
                        <Lunbo />
                        {/* 这是八宫格 */}
                        <Bagongge style={{ display: 'flex' }} />
                        {/* 这是四方块图片 */}
                        <Sifangkuai style={{ overflow: "visible" }} />

                        {/* 白色系列 */}
                        <Baisexilie />
                        <Online />
                        {/* 大组件 */}

                        <Dazujian msg={this.state.url} />

                        <Dazujian msg={this.state.url2} />

                        <Dazujian2 msg={this.state.url4} />

                        <Dazujian msg={this.state.url3} />

                        <Dazujian2 msg={this.state.url5} />
                        <Huidao />
                        <Lianxi />
                        <ToTop ref='toTops' />
                    </div>
                </div>

                <Footers />
            </div >
        )
    }

}) 