import React from "react";

import Sifang from "./Sifangkuai.css";

class Sifangkuai extends React.Component {

    state = {
        name: [
            {
                img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgj-KG3gUo8PrS9QYw6AI46gE.jpg',
            },
            {
                img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgwfKG3gUotOCI4Qcw6AI44QE.jpg',
            }, {
                img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAg_-KG3gUo4qvtsgEw6AI4wwE.jpg',
            }, {
                img: '//1262329.s21i.faiusr.com/2/ABUIABACGAAgx9eC4QUogJei8AYw6AI4wwE.jpg',
            },

        ]
    }

    render() {
        return (
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {
                    this.state.name.map((item, index) => {
                        return (
                            <div key={index} className={`${Sifang.cubeLink} ${Sifang.cubeLink9}`} id={Sifang.cubeNavigation411CubeLink9} linkid="9">
                                <a className={`${Sifang.cubeLinkA} ${Sifang.textLayout0}`} href="pd.jsp?pid=4346" target="_self" id={Sifang.cubeLinkA9CubeNav411}>
                                    <div className={`${Sifang.cubeLinkBg} ${Sifang.JCubeLinkBg} ${Sifang.forLazyload} ${Sifang.fadeInForLazyload}`} data-original="//1262329.s21i.faiusr.com/2/ABUIABACGAAgj-KG3gUo8PrS9QYw6AI46gE.jpg " style={{ display: 'block', backgroundImage: 'url(' + item.img + ')' }}>
                                        </div>
                                        <div className={Sifang.cubeLinkCurtain}></div>
                                        <div className={`${Sifang.cubeLinkIco} ${Sifang.iconCube}`}></div>
                                        <div className={`${Sifang.cubeLinkText} ${Sifang.gLink}`}>
                                            <div className={Sifang.cubeLinkTextP}>
                                                <p className={Sifang.cubeLinkSubTextP}></p>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


}

export default Sifangkuai;