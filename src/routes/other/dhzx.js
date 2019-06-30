import React, { Component } from 'react';
import { connect } from 'dva';
import Footers from './../HomePage/HomePage';
import Headers from './../../components/Headers';
import Login from './../../components/Login';
import Lxfs from './../../components/lianxi';
import ToTop from './../../components/ToTop';
import Tellzx from './../../components/Tellzx';



import cpml from './cpml/cpml.less';
import Search from '../../components/search/Search';


export default connect((state) => {
    return state;
})(class HomePage extends Component {
    state = {
    }
    componentDidMount() {
    }
    //修改仓库的值  是否显示  搜索组件 true 为显示
    searchshow() {
        this.props.dispatch({
            type: 'example/save',
            payload: {
                searchshow: true
            }
        }
        )
    }

    onscrolls() {
        if (this.refs.scrolls.scrollTop >= 600) {
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
                {/* 搜索组件 */}
                <Search />
                <Headers />

                <div id={cpml.cpml} ref='scrolls' onScroll={this.onscrolls.bind(this)} style={{
                    flex: "1",
                    overflowX: 'hidden'
                }}>
                    <div>
                        <Login />
                        <div className={cpml.marbox}>
                            {/* <marquee align='absmiddle' className={cpml.marquee}><span>免费上门测量，专业提供设计图纸！020-38452029</span>
                                &nbsp;&nbsp;&nbsp;<span>1500平方大型展厅，20000平方生产厂房，欢迎参观！020-38452029</span>
                            </marquee> */}
                        </div>
                        {/* 搜索框  点击搜索框显示 搜索组件 */}
                        <div className={cpml.search} onClick={this.searchshow.bind(this)}>
                            <div className={cpml.sbox}>
                                <div className={`faisco-icons-search4 ${cpml.icon}`} >

                                </div>
                                请输入关键字…
                            <div className={cpml.go}>
                                    GO
                            </div>
                            </div>

                        </div>

                        <div className={cpml.content}>
                            <p><br /></p>
                            <p><br /></p>
                            <p className={cpml.title}>一站式办公家具采购网站，沛瑾家具！</p>
                            <p style={{ textAlign: 'center' }}><img src={require("../../assets/img/new.gif")} alt="" /></p>
                            <div className={cpml.cbox}>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex} style={{ padding: '0px 0.799231rem' }}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i><span className={cpml.flexcon}>烤漆前台</span><span className={cpml.flexcon}>板式前台</span><i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={`${cpml.bt} ${cpml.bgz}`}>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>办公桌系列</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={`${cpml.bt}`} style={{ flex: 2 }}>
                                    <p><br /></p>
                                    <p className={cpml.flex}> <span className={cpml.flexcon}>组合屏风</span>
                                        <span className={cpml.flexcon}>独立电脑桌</span></p>
                                    <p><br /></p>
                                    <p className={cpml.flex}> <span className={cpml.flexcon}>板式屏风</span>
                                        <span className={cpml.flexcon}>组合办公桌</span></p>
                                    <p><br /></p>
                                </div>
                                <div className={cpml.bt} style={{ padding: '0.307692rem 0 0 0 ' }}>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>文件柜系列</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}> <span className={cpml.flexcon}>高文件柜</span>
                                        <span className={cpml.flexcon}>矮文件柜</span></p>
                                    <p><br /></p>
                                    <p className={cpml.flex}> <span className={cpml.flexcon}>实木文件柜</span>
                                        <span className={cpml.flexcon}>钢制文件柜</span></p>
                                    <p><br /></p>
                                    <p className={cpml.flex}> <span className={cpml.flexcon}>钢制更衣柜</span>
                                        <span className={cpml.flexcon}>电子保密柜</span></p>
                                    <p><br /></p>
                                    <p className={cpml.flex}> <span className={cpml.flexcon}>密集架系列</span>
                                        <span className={cpml.flexcon}>卡柜/矮柜</span></p>
                                    <p><br /></p>
                                    <p><br /></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>大班台系列</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}>

                                        <span className={cpml.flexcon}>经理大班台</span>
                                        <span className={cpml.flexcon}>老板大班台</span>
                                        <span className={cpml.flexcon}>实木大班台</span>
                                    </p>
                                    <p><br /></p>
                                </div>


                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>会议桌系列</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}>

                                        <span className={cpml.flexcon}>钢木会议桌</span>
                                        <span className={cpml.flexcon}>板式会议桌</span>
                                        <span className={cpml.flexcon}>实木会议桌</span>
                                    </p>
                                    <p><br /></p>
                                </div>


                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>办公椅系列</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}>

                                        <span className={cpml.flexcon}>网布椅</span>
                                        <span className={cpml.flexcon}>会议椅</span>

                                    </p>
                                    <p><br /></p>
                                    <p className={cpml.flex}>

                                        <span className={cpml.flexcon}>经理椅</span>
                                        <span className={cpml.flexcon}>老板椅</span>

                                    </p>
                                    <p><br /></p>
                                </div>


                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>办公沙发</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}>
                                        <span className={cpml.flexcon}>时尚沙发</span>
                                        <span className={cpml.flexcon}>传统沙发</span>
                                    </p>
                                    <p><br /></p>
                                </div>


                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>办公茶几</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}>
                                        <span className={cpml.flexcon}>玻璃茶几</span>
                                        <span className={cpml.flexcon}>传统茶几</span>
                                    </p>
                                    <p><br /></p>
                                </div>


                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>洽谈桌系列</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}>
                                        <span className={cpml.flexcon}>简约洽谈桌</span>
                                        <span className={cpml.flexcon}>玻璃洽谈桌</span>
                                    </p>
                                    <p><br /></p>
                                </div>



                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>校园家具</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}>

                                        <span className={cpml.flexcon}>课桌椅</span>
                                        <span className={cpml.flexcon}>公寓床</span>
                                        <span className={cpml.flexcon}>货架系列</span>
                                    </p>
                                    <p><br /></p>
                                </div>


                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>隔断系列</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>
                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}>
                                        <span className={cpml.flexcon}>卫生间隔断</span>
                                        <span className={cpml.flexcon}>高隔断系列</span>
                                    </p>
                                    <p><br /></p>
                                </div>
                            </div>
                            <p><br /></p>
                            <p><br /></p>
                            <div className={cpml.cbox}>
                                <div className={cpml.bt}>
                                    <p className={cpml.flex}><i><img src={require('../../assets/img/jt.gif')} alt="" /></i> <span className={cpml.flextit}>酒店家具</span> <i><img src={require('../../assets/img/xing.gif')} alt="" /></i></p>
                                </div>

                                <div className={cpml.bt}>
                                    <p><br /></p>
                                    <p className={cpml.flex}>

                                        <span className={cpml.flexcon}>桌椅系列</span>
                                        <span className={cpml.flexcon}>酒店床系列</span>
                                        <span className={cpml.flexcon}>柜子系列</span>
                                    </p>
                                    <p><br /></p>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                        <ToTop ref='toTops' />
                        <Lxfs />
                    </div>
                </div>
                <Footers />
                <Tellzx />
            </div >
        )
    }

}
)