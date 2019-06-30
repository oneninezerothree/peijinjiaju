import React, { Component } from 'react';
import { connect } from 'dva';
import search from './Search.less';
import creatDiv from '../../components/tanchuang'
export default connect((state) => {
    return state;
})(class Search extends Component {
    state = {
        val: '',//输入框的值
        history: [],//搜索历史记录
        isshow: true,// 是否显示搜索记录 true为不显示
    }
    searchshow() {
        this.props.dispatch({
            type: 'example/save',
            payload: {
                searchshow: false
            }
        }
        )
        this.clearval();
    }
    //绑定输入框的数值
    setval(e) {
        this.setState({
            val: e.target.value
        })
    }
    //清除输入框的值
    clearval() {
        this.setState({
            val: ''
        })
    }
    //搜索事件  可以用来跳路由
    search() {
        if (this.state.val === '') {
            //判断输入框为空
            creatDiv('请输入内容');
        } else {
            let historySearch = localStorage.getItem('historySearch');
            if (historySearch === null || historySearch === '') {
                localStorage.setItem('historySearch', JSON.stringify([this.state.val]))
            } else {
                //去重
                let hislis = JSON.parse(historySearch)
                let arr = [];
                for (let i = 0; i < hislis.length; i++) {
                    if (hislis[i].indexOf(this.state.val) === -1) {
                        arr.push(hislis[i])
                    }
                }
                //把输入内容存locastorage
                localStorage.setItem('historySearch', JSON.stringify([this.state.val, ...arr]))
            }
            //可以在这里写跳路由
        }
        this.gethistory();
    }
    //点击搜索事件
    gosearch() {
        this.search();
    }
    //enter搜索事件
    tosearch(e) {
        if (e.keyCode === 13) {
            this.search();
            this.clearval();
        }
    }
    //获取搜索历史记录
    gethistory() {
        let history = JSON.parse((localStorage.getItem('historySearch')));
        if (history === null || history === '') {
            this.setState({
                history: [],
                isshow: true
            })
        } else {
            this.setState({
                history,
                isshow: false
            })
        }

    }
    componentDidMount() {
        //进入组件获取搜索历史记录
        this.gethistory();
    }
    //清除搜索历史记录
    clearhisthory() {
        localStorage.removeItem('historySearch');
        this.gethistory();
    }
    //点击历史记录跳转路由
    todetails(data) {
        //data  为点击那条历史记录就是那个历史记录的值
        console.log(data);
    }
    render() {
        return (
            <div className={`${search.box} ${this.props.example.searchshow ? search.show : ''}`} >
                <div className={search.searchbox} style={{
                borderBottom: '1px solid #ddd'
            }}>
                    <div className={`faisco-icons-back5 ${search.icon}`} onClick={this.searchshow.bind(this)}></div>
                    <div className={search.val}>
                        <label className={'faisco-icons-search4'} htmlFor='val'></label>

                        <input onKeyDown={this.tosearch.bind(this)} onChange={this.setval.bind(this)} value={this.state.val} type="text" placeholder='请输入关键字…' id="val" />
                        <span onClick={this.clearval.bind(this)} className={`${search.showclose} ${this.state.val.length > 0 ? search.close : ''}`}>x</span>

                        <div className={search.todo} onClick={this.gosearch.bind(this)} >
                            GO
                        </div>
                    </div>
                </div>

                <div className={`${search.history} ${this.state.isshow ? search.isshow : ''}`}>
                    <p>历史记录</p>
                    <div className={search.tips}>
                        {
                            this.state.history.map((item, i) => {
                                return <span key={i
                                } onClick={this.todetails.bind(this, item)}>{item}</span>
                            })
                        }
                    </div>
                    <div onClick={this.clearhisthory.bind(this)} className={search.clear}>
                        清空搜索记录
                    </div>
                </div>

            </div>
        )
    }
}
)