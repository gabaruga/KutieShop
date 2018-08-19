import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import ShopItem from './ShopItem'
import registerServiceWorker from './registerServiceWorker';
import NavMenu from './NavMenu';
import Reel from './Reel';
import CheckOut from './CheckOut';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
import { createStore } from 'redux';

const init = {  count: 0,
                items_check: [],
            }

function reducer(state=init, action) {
    switch (action.type) {
        case "UPDATE_CHECK":
            return {...state,
                    count: state.count+action.value};
        case "ADD_CHECKOUT":
            console.info("State update: "+action.value+" - "+action.aq);
            return {...state,
                items_check: [...state.items_check, [action.value, action.aq]]};
        default:
            return state;
    }
}

const store = createStore(reducer);

const ShopPies = () => (<div className="shopwrap">
<ShopItem title="Вікашкині булочки" body="Гарни пишни" />
<ShopItem title="Тошидло-повидло" body="Смачни сладки" />
</div>);

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
