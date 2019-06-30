import React from 'react';
import { Router, Route, Switch } from 'dva/router';


import IndexPage from './routes/IndexPage';



import Yycl from '././routes/other/yycl';
import Zxkf from '././routes/other/zxkf';
import Cpml from '././routes/other/cpml';
import Sy from '././routes/other/sy';
import Denlu from './components/denlu';
import Zuce from './components/zuce';
import Leb from '././routes/other/Leb';
import Xqy from '././routes/other/Tabxq';







function RouterConfig({ history }) {

  return (
    <div style={{
      height: '100%'
    }}>

      <Router history={history}>
        <Switch>
          {/* 下面这个路由别动 */}
          <Route path="/hfshhehfe" exact component={IndexPage} />
          <Route path="/" exact component={Sy} />
          <Route path="/yycl" exact component={Yycl} />
          <Route path="/zxkf" exact component={Zxkf} />
          <Route path="/cpml" exact component={Cpml} />
          <Route path="/denlu" exact component={Denlu} />
          <Route path="/zuce" exact component={Zuce} />
          <Route path="/Leb" exavt component={Leb} />
          <Route path="/tabxqy" exavt component={Xqy} />


        </Switch>
      </Router>
    </div>



  );
}

export default RouterConfig;
