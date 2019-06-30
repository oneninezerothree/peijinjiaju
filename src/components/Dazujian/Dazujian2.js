import React from "react";

import Dazujian from "./Dazujian.css"

class Dazhujian2 extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {

        console.log(this.props.msg);

        return (
            <div>
                <div style={{ background: "#fff",margin:'0' }} className={`${Dazujian.cubeNavigationArea} ${Dazujian.newCubeNavigationArea} ${Dazujian.newCubeNavigationArea3}`}>
                    <div className={Dazujian.cubeLink + " " + this.props.msg[0].cls} id={this.props.msg[0].id1} linkid="1" style={{ height: '111.25px',width:"95%" }}>
                        <a className={`${Dazujian.cubeLinkA} ${Dazujian.textLayout0}`} href="pd.jsp?pid=4325" target="_self" id={this.props.msg[0].ida} style={{ height: '111.25px' }}>
                            <div className={`${Dazujian.cubeLinkBg} ${Dazujian.JCubeLinkBg} ${Dazujian.forLazyload} ${Dazujian.fadeInForLazyload}`} data-original="//1262329.s21i.faiusr.com/2/ABUIABACGAAgj5yH4QUopp-bZTDYBDjlAg.jpg " style={{ display: 'block', backgroundImage: 'url(' + this.props.msg[0].n1 + ')' }}></div>
                            <div className={Dazujian.cubeLinkCurtain}></div>
                            <div className={`${Dazujian.cubeLinkIco} ${Dazujian.iconCube}`}></div>
                            <div className={`${Dazujian.cubeLinkText} ${Dazujian.gLink}`}>
                                <div className={Dazujian.cubeLinkTextP}>
                                    {this.props.msg[0].anli}
                                    <p className={Dazujian.cubeLinkSubTextP}></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dazhujian2;