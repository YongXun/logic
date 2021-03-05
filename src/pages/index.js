import React from 'react';
import { HashRouter , Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Loading from '../util/loading.js';

import Discover from './Discover';

import store from '../store';

const Editor = Loading(() => import('../pages/Editor'));
const Detail = Loading(() => import('../pages/Detail'));
const Login = Loading(() => import('../pages/Login'));
const Register = Loading(() => import('../pages/Register'));

const style = {
    wrapper:{
        width:'100%',
        height:'100%'
    }
}

const App = ()=>{

    return(
        <Provider store={store}>
            <HashRouter>
                <div>
                    <Route path="/" exact component={Discover}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/editor" component={Editor}></Route>
                    <Route path="/detail/:p" component={Detail}></Route>
                </div>
            </HashRouter>
        </Provider>
    )
}

export default App;