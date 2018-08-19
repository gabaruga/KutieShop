import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NavMenu from './NavMenu';
import Reel from './Reel';
import DBReader from './DBReader';
import CheckOut from './CheckOut';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
import { createStore } from 'redux';
import './index.css';

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

const ReelFooter = () => (<div><Reel /><div className="greeting"><h1>Вітаємо у магазинчику</h1><p>Купуйте хлібці та пиріжки</p></div></div>)

var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render(    <Provider store={store}>
                        <Router history={hashHistory}>
                        <div>
                            <Route path="/" component={NavMenu} />
                            <Route exact path="/" component={ReelFooter} />
                            <Route path="/bread" render={(props) => <DBReader collection="bread" />} />
                            <Route path="/pies" render={(props) => <DBReader collection="pies" />} />
                            <Route path="/check" component={CheckOut} />
                        </div>
                        </Router>
                    </Provider>
                    ,
                    document.getElementById('root'));
registerServiceWorker();
