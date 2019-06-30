import React from "react";

import Dazujian from "./Dazujian.css"

class Dazhujian extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        console.log(this.props.msg);

        return (
            <div>
                {
                    this.props.msg.map((item, index) => {

                        return <div key={
                            index
                        } >
                            <div style={{ height: '1.35266rem', padding: '0 0 0 10px', marginTop: '0.193237rem', background: '#fff', lineHeight: '35px' }} >
                                <span style={{ fontSize: '0.7rem', backgroundColor: 'initial' }}> {item.name} </span>
                                <span style={{ backgroundColor: ' initial', color: 'rgb(169, 169, 169)', fontSize: '0.690027rem', textAlign: 'center', fontFamily: '微软雅黑', }}>&gt;&gt;</span>
                                <span style={{ backgroundColor: 'initial', color: 'rgb(169, 169, 169)', fontSize: '0.690027rem', textAlign: 'center', fontFamily: '微软雅黑' }}></span>
                            </div>
                            <div style={{ background: "#fff" }} className={`${Dazujian.cubeNavigationArea} ${Dazujian.newCubeNavigationArea} ${Dazujian.newCubeNavigationArea3}`}>


                                {
                                    item.img.map((ii, inde) => {
                                        return (
                                            <div key={inde} className={Dazujian.cubeLink + " " + ii.cls} id={ii.id1} linkid="1" style={{ height: '111.25px' }}>
                                                <a className={`${Dazujian.cubeLinkA} ${Dazujian.textLayout0}`} href="pd.jsp?pid=4325" target="_self" id={ii.ida} style={{ height: '111.25px' }}>
                                                    <div className={`${Dazujian.cubeLinkBg} ${Dazujian.JCubeLinkBg} ${Dazujian.forLazyload} ${Dazujian.fadeInForLazyload}`} data-original="//1262329.s21i.faiusr.com/2/ABUIABACGAAgj5yH4QUopp-bZTDYBDjlAg.jpg " style={{ display: 'block', backgroundImage: 'url(' + ii.n1 + ')' }}></div>
                                                    <div className={Dazujian.cubeLinkCurtain}></div>
                                                    <div className={`${Dazujian.cubeLinkIco} ${Dazujian.iconCube}`}></div>
                                                    <div className={`${Dazujian.cubeLinkText} ${Dazujian.gLink}`}>
                                                        <div className={Dazujian.cubeLinkTextP}>
                                                            {ii.anli}
                                                            <p className={Dazujian.cubeLinkSubTextP}></p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        )


                                        // <img src={
                                        //                 ii.n1
                                        // }  key={inde} />
                                    })
                                    // console.log(item.img)
                                }

                            </div>
                        </div>
                    }
                    )
                }
            </div>
        )
    }

};



export default Dazhujian;