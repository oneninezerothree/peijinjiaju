import React from "react";

import Baise from "./Baisexilie.css"

class Baisexilie extends React.Component {

    state = {
        name: [
            {
                classx: 'cubeLink1',
                img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgy5CH4QUouK6mvQcw2AQ4wgM.jpg'
            },
            {
                classx: 'cubeLink2',
                img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgypGH4QUo0M386AEw2AQ4wgM.jpg'
            },
            {
                classx: 'cubeLink3',
                img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgpZKH4QUo9KTyzgMw2AQ4wgM.jpg'
            },
            {
                classx: 'cubeLink4',
                img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg54yH4QUo_8WytwUw2AQ4wgM.jpg'
            },
            {
                classx: 'cubeLink5',
                img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgvo_H4QUoqK7vhAIw2AQ4wgM.jpg'
            },
        ]
    }
    render() {
        return (

            <div>
                <div style={{ height: '1.35266rem', padding: '0 0 0 10px', marginTop: '0.193237rem', background: '#fff', lineHeight: '35px' }}>
                    <span style={{ fontSize: '0.7rem', backgroundColor: 'initial' }}>白色烤漆系列</span>
                    <span style={{ backgroundColor: ' initial', color: 'rgb(169, 169, 169)', fontSize: '0.690027rem', textAlign: 'center', fontFamily: '微软雅黑', }}>&gt;&gt;</span>
                    <span style={{ backgroundColor: 'initial', color: 'rgb(169, 169, 169)', fontSize: '0.690027rem', textAlign: 'center', fontFamily: '微软雅黑' }}></span>
                </div>
                <div className={`${Baise.cubeNavigationArea} ${Baise.newCubeNavigationArea} ${Baise.newCubeNavigationArea5}`} value="5" id={Baise.cubeNavigation409} style={{ marginTop: '0.193237rem', background: "#fff" }}>
                    {
                        this.state.name.map((item, index) => {

                            return (
                                <div key={index} className={Baise.cubeLink + " " + item.classx} id={Baise.cubeNavigation409CubeLink1} linkid="1">
                                    <a className={`${Baise.cubeLinkA} ${Baise.textLayout0}`} href="pd.jsp?pid=4370" target="Self" id={Baise.cubeLinkA1CubeNav409}>
                                        <div className={`${Baise.cubeLinkBg} ${Baise.JCubeLinkBg} ${Baise.forLazyload} ${Baise.fadeInForLazyload}`} data-original="//1262329.s21i.faiusr.com/2/ABUIABACGAAgy5CH4QUouK6mvQcw2AQ4wgM.jpg " style={{ height: "100%", display: 'block', backgroundImage: "url(" + item.img + ")" }}></div>
                                        <div className={Baise.cubeLinkCurtain}></div>
                                        <div className={`${Baise.cubeLinkIco} ${Baise.iconCube}`}></div>
                                        <div className={`${Baise.cubeLinkText} ${Baise.gLink}`}>
                                            <div className={Baise.cubeLinkTextP}>
                                                <p className={Baise.cubeLinkSubTextP}></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    } </div>
            </div>
        )
    }

};



export default Baisexilie;