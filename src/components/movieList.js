import React, { Component } from 'react';
import PropTypes from 'prop-types';

class movieListCnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: !this.state.show
      })
    }, 1000)
  }
  render() {
    let mList = this.props.mListData,
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
            <a href='javaScript:void(0);' className='list-item'>
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
            </a>
          </li>
    )
  }
}
movieListCnt.defaultProps = {
  mListData: {}
  // isComming: 0,
  // movieSc: 0,
  // movieWish: 0,
  // imgUrl: 'img',
  // movieTitle: '电影标题',
  // movieDesc: '电影介绍',
  // movieStatus: '电影状态'
}
movieListCnt.propTypes = {
  mListData: PropTypes.object.isRequired
  // isComming: PropTypes.number.isRequired,
  // movieSc : PropTypes.number.isRequired,
  // movieWish : PropTypes.number.isRequired,
  // imgUrl : PropTypes.string.isRequired,
  // movieTitle : PropTypes.string.isRequired,
  // movieDesc : PropTypes.string.isRequired,
  // movieStatus : PropTypes.string.isRequired
}

export default movieListCnt;
