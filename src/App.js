import React, {Component} from 'react';
import {GlobalStyle} from './style';
import {IconfontStyle} from './static/iconfont';
import Header from './common/Header'
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail/loadable.js';
import Login from './pages/Login';
import Write from './pages/Write';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <IconfontStyle/>
                <BrowserRouter>
                    <div>
                        {/*<Route path="/" exact render={() => <div>home</div>}></Route>*/}
                        <Header/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/write" exact component={Write}/>
                        <Route path="/detail/:id" exact component={Detail}/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
