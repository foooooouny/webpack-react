import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import MyAction from '../../../actions';
import MovieListDetail from './listDetail';
// import QueueAnim from 'rc-queue-anim';

class MovieList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      movieShow: false,
      moreMovie: true,
      loadMovie: false,
      mListParam: {
        type: 'hot',
        offset: 0,
        limit: 20
      },
      movieListData: {},
      movieListErr: '',
      mListData: []
    }
  }
  componentDidMount() {
    this.getMovieList();
  }
  // 获取 movieList
  getMovieList() {
    let url = '/api/movie/list.json',
        mData = [],
        movieListD = [],
        { MyAction } = this.context.myCtxtObject;
    MyAction.getHomePageList(url, this.state.mListParam)
      .then((d) => {
        mData = d.data.data.movies;
        if (mData.length === 0) {
          this.setState({
            moreMovie: !this.state.moreMovie
          })
          return false;
        }
        for(let item of mData) {
          movieListD.push(<MovieListDetail key={item.id} mListData={item}/>);
        }
        this.setState({
          mListData: this.state.mListData.concat(movieListD),
          mListParam: {
            type: 'hot',
            offset: this.state.mListParam.offset + this.state.mListParam.limit,
            limit: 10
          }
        })
        if (!this.state.movieShow) {
          setTimeout(() => {
            this.updateMovieShow();
          }, 300);
        } else {
          this.setState({
            loadMovie: !this.state.loadMovie
          })
        }
        // 释放movieListD  url
        url = null;
        movieListD = null;
      })
      .catch((err) => {
        this.setState({
          movieListErr: (<li>{ `哎哟，不妙哦，出错了! ${err}` }</li>)
        })
      })
  }
  getMoreData() {
    this.setState({
      loadMovie: !this.state.loadMovie
    })
    this.getMovieList();
  }
  updateMovieShow() {
    this.setState({
      movieShow: !this.state.movieShow
    })
  }

  render() {
    let { QueueAnim } = this.context.myCtxtObject;
    return (
      <section>
        <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
          { this.state.movieShow ? [
            <div key='mList'>
              <ul className='movie-list ant-col-24' key='mList'>
                  <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    {this.state.movieShow ? [
                      this.state.mListData
                    ] : null}
                  </QueueAnim>
              </ul>
              { this.state.moreMovie ? [
                !this.state.loadMovie ? [
                  <a className='load-more ant-col-24' href='javaScript:void(0);' onClick={this.getMoreData.bind(this)} key='loadMore'>加载更多影片
                    <i className='anticon anticon-down'></i>
                  </a>
                ] : [
                  <div className='mp-loading ant-col-24' key='mp-loading'>
                    <span className='spin'></span>
                    正在努力加载
                  </div>
                ]
              ] : [
                <div className='no-more ant-col-24' key='noMore'>
                  没有更多啦...
                </div>
              ]}
            </div>
          ] : null }
        </QueueAnim>
        { !this.state.movieShow ? [
          <div className='mp-loading main-loading ant-col-24' key='movie-main-loading'>
            <span className='spin'></span>
            正在努力加载
          </div>
        ] : null }
      </section>

    )
  }
}

MovieList.contextTypes = {
  myCtxtObject: PropTypes.object.isRequired
}

export default MovieList;
