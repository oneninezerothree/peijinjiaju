import React from "react";
import bagon from './Bagongge.css'
// import React, { Component } from 'react';
import {Link} from 'dva/router'

class Bagongge extends React.Component {

    state = {
        name: [{
            name: '前台接待',
            img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgjOWG3gUo-uamvwIwPDg8.jpg',
            url:{
                //点击那个跳转哪里
                pathname:'',
                search:'',
                hash:'#the-hash'
            }
        },
        {
            name: '办公屏风',
            img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgnOeG3gUolpHIzgQwPDg8.jpg',
            url:{
                pathname:'',
                search:'',
                hash:'#the-hash'
            }
        },
        {
            name: '大班台',
            img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgh_2G3gUoptnLsQIwPDg8.jpg',
            url:{
                pathname:'',
                search:'',
                hash:'#the-hash'
            }
        },

        {
            name: '办公桌',
            img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg_OyG3gUo38TPwAEwPDg8.jpg',
            url:{
                pathname:'',
                search:'',
                hash:'#the-hash'
            }
        },

        {
            name: '文件柜',
            img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgh_2G3gUo05ya7QMwPDg8.jpg',
            url:{
                pathname:'',
                search:'',
                hash:'#the-hash'
            }
        },

        {
            name: '办公椅',
            img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg3uyG3gUohMGuzwIwPDg8.jpg',
            url:{
                pathname:'',
                search:'',
                hash:'#the-hash'
            }
        },

        {
            name: '办公沙发',
            img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg9uyG3gUoyqqGuwcwPDg8.jpg',
            url:{
                pathname:'',
                search:'',
                hash:'#the-hash'
            }
        },

        {
            name: '办公茶几',
            img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg4OyG3gUo_PPHkwMwPDg8.jpg',
            url:{
                pathname:'',
                search:'',
                hash:'#the-hash'
            }
        }]
    }

    render() {
        return (
            <div id={bagon.bage} style={{display:'flex',flexWrap:'wrap',width:'100%'}}>  {

                this.state.name.map((item, index) => {

                    return (

                        <div key={index} className={`${bagon.cubeLink} ${bagon.cubeLink1}`} id={bagon.cubeNavigation411CubeLink1} linkid="1" style={{width:'25%',background:'#fff' }}>

                            <Link className={`${bagon.cubeLinkA} ${bagon.textLayout0}`} to={'/Leb?'+index + 'bagonge'} target="_self" id={bagon.cubeLinkA1CubeNav411} style={{ display: 'inline-block', height: '108.672px', }}>

                                <div className={bagon.cubeLinkBg}></div>

                                <div className={bagon.cubeLinkCurtain}></div>
                                                {/* 这是图片的路径 */}
                                <div style={{ backgroundImage: "url(" + item.img + ")" }} className={`${bagon.cubeLinkIco} ${bagon.iconCube}`}></div>
                               
                                <div className={`${bagon.cubeLinkText} ${bagon.gLink}`}>
                                    
                                    <div className={bagon.cubeLinkTextP}>
                                        {/* 这是名字 */}
                                        {item.name}

                                        <p className={`${bagon.cubeLinkSubTextP}`}></p>

                                    </div>

                                </div>

                            </Link>

                        </div>

                    )

                })

            }
            
            </div>
        )
    }
}


export default Bagongge;