import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieListDetail extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {

  }
  render() {
    let { NavLink } = this.context.myCtxtObject,
        mList = this.props.mListData,
        isComming = mList.preSale === 1,
        movieId = mList.id,
        movieSc = mList.sc,
        movieWish = mList.wish,
        imgUrl = mList.img,
        movieTitle = mList.nm,
        movieDesc = mList.scm || '暂无描述',
        movieStatus = mList.showInfo;

    return (
      <li className={ isComming ? 'isComming' : '' }>
            <span className='movie-info'>
              <em>
                { isComming ? movieSc : movieWish }
              </em>
              <a className={ `btn-trans${isComming ? ' btn-presales' : ''}` } href='javaScript:void(0);'>
                { isComming ? '预售' : '购票' }
              </a>
            </span>
            <NavLink replace to={ `/movie/${ movieId }` } className='list-item'>
              <img className='movie-img' src= { imgUrl } width = { 61 } height = { 84 } />
              <div className='movie-cnt'>
                <h4>
                  { movieTitle }
                </h4>
                <p className='movie-desc'>
                  { movieDesc }
                </p>
                <p className='movie-status'>
                  { movieStatus }
                </p>
              </div>
            </NavLink>
          </li>
    )
  }
}
MovieListDetail.contextTypes = {
  myCtxtObject: PropTypes.object.isRequired
}
MovieListDetail.propTypes = {
  mListData: PropTypes.object.isRequired
}

export default MovieListDetail;
