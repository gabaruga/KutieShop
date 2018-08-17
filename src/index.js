import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import ShopItem from './ShopItem'
import registerServiceWorker from './registerServiceWorker';
import NavMenu from './NavMenu';
import Reel from './Reel';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
import { createStore } from 'redux';

const init = { count: 0}

function reducer(state=init, action) {
    if (action.type === "UPDATE_CHECK") {
        return {count: state.count+action.value}
    } 

    return state;
}

const store = createStore(reducer);

const ShopPies = () => (<div className="shopwrap">
<ShopItem title="Вікашкині булочки" body="Гарни пишни" />
<ShopItem title="Тошидло-повидло" body="Смачни сладки" />
</div>);

const CheckOut = () => (<div>This is a checkout</div>)

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render(    <Provider store={store}>
                        <Router history={hashHistory}>
                        <div>
                            <Route path="/" component={NavMenu} />
                            <Route path="/bread" component={Reel} />
                            <Route path="/pies" component={ShopPies} />
                            <Route path="/check" component={CheckOut} />
                        </div>
                        </Router>
                    </Provider>
                    ,
                    document.getElementById('root'));
registerServiceWorker();
