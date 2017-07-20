// require('normalize.css/normalize.css');
import 'antd/lib/grid/style/css';
require('../styles/scss/main.scss');
require('../styles/scss/cnt.scss');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './myContent';
import Footer from './Footer';
import MyAction from '../actions';
import QueueAnim from 'rc-queue-anim';

class AppMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainShow: false,
      fotShow: false
    }
  }
  getChildContext() {
    return {
      myCtxtObject: {
        Router: Router,
        Route: Route,
        NavLink: NavLink,
        Redirect: Redirect,
        MyAction: MyAction,
        QueueAnim: QueueAnim
      }
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      mainShow: !this.state.mainShow,
      fotShow: !this.state.fotShow
    })
  }
  render() {
    return(
      <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
        { this.state.mainShow ? [
          <main key='appMain'>
            <Header key='header'/>
            <Content key='content' context/>
            { this.state.fotShow ? [
              <Footer key='footer'/>
            ] : null}
          </main>
        ] : null}
      </QueueAnim>
    );
  }
}
AppMain.childContextTypes = {
  myCtxtObject: PropTypes.object.isRequired
}

export default AppMain;
