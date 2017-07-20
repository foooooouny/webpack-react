import React, { Component } from 'react';
// import { render } from 'react-dom';
import PropTypes from 'prop-types';
import MovieList from './movieList';
import CinemasList from './cinemasList';
import MovieDetail from './movieDetail';

class MaoYanList extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let { Router, Route, NavLink, Redirect } = this.context.myCtxtObject;
    return (
      <Router>
        <article className='cnt-main'>
          <ul className='row cnt-navbar'>
            <li className='ant-col-12'>
              <NavLink exact replace to='/movie' activeClassName='active' >影片</NavLink>
            </li>
            <li className='ant-col-12'>
              <NavLink exact replace to='/cinemas' activeClassName='active' >影院</NavLink>
            </li>
          </ul>

          <Route exact path="/" render={() => (
            <Redirect push to='/movie' />
          )}/>
          <Route exact strict path="/movie" component={ MovieList }/>
          <Route exact strict path="/movie/:id" component={ MovieDetail }/>
          <Route exact strict path="/cinemas" component={ CinemasList }/>
        </article>
      </Router>
    )
  }
}

MaoYanList.contextTypes = {
  myCtxtObject: PropTypes.object.isRequired
}


class MaoYanCnt extends Component {
  constructor(props, context) {
    super(props, context);
  }
  changePage() {

  }

  render() {
    let { Router, Route, NavLink, Redirect } = this.context.myCtxtObject;
    return(
      <Router>
        <article className='cnt-main'>
          <ul className='row cnt-navbar'>
            <li className='ant-col-12'>
              <NavLink exact replace to='/movie' activeClassName='active' >影片</NavLink>
            </li>
            <li className='ant-col-12'>
              <NavLink exact replace to='/cinemas' activeClassName='active' >影院</NavLink>
            </li>
          </ul>

          <Route exact path="/" render={() => (
            <Redirect push to='/movie' />
          )}/>
          <Route exact strict path="/movie" component={ MovieList }/>
          <Route exact strict path="/cinemas" component={ CinemasList }/>
        </article>
      </Router>
    )
  }
}

MaoYanCnt.contextTypes = {
  myCtxtObject: PropTypes.object.isRequired
}

export default MaoYanCnt;
