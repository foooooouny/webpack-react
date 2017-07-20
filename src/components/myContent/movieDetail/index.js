import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieD extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      movieShow : false,
      movieDetailErr : '',
      moviePhotosArr : [],
      movieObjData: ''
    }
  }
  componentDidMount() {
    this.getMovieDetail();
  }
  getMovieDetail() {
    let movieId = location.pathname.substring(7),
        url = `/api/movie/${movieId}.json`,
        { MyAction } = this.context.myCtxtObject,
        movieData = {},
        moviePhotosData = [],
        moviePhotos = [];

    MyAction.getHomePageList(url)
        .then((d) => {
          movieData = d.data.data.MovieDetailModel;
          console.log(d.data.data);
          moviePhotosData = movieData.photos;
          moviePhotosData.forEach((value, key) => {
            moviePhotos.push(<li key={ key }>
                              <a href='javaScript:void(0);' className='celebrities-link'>
                                <img src={ `${value.replace(/\/w.h/, '')}@130w_180h.webp` }/>
                              </a>
                            </li>);
          })
          this.setState({
            movieObjData: movieData,
            moviePhotosArr: moviePhotos
          })
          if (!this.state.movieShow) {
            this.setState({
              movieShow: !this.state.movieShow
            })
          }
        })
        .catch((err) => {
          this.setState({
            movieDetailErr: (<li>{ `哎哟，不妙哦，出错了! ${err}` }</li>)
          })
        })
  }

  render() {
    let { img, nm, sc, cat, rt, src, pn, dra } = this.state.movieObjData;
    return(
      <div className='movie-detail'>
        { this.state.movieShow ? [
          <section className='movie-header' key='movie-section-1'>
            <div className='movie-bg movie-ab' style={ {'backgroundImage': `url(${img})`} }></div>
            <div className='movie-filter movie-ab'></div>
            <div className='movie-cover'>
              <a href='javaScript:void(0);'>
                <img src= { img }/>
              </a>
            </div>
            <div className='movie-content'>
              <div className='movie-name text-ellipsis'>
                <span>{ nm }</span>
              </div>
              <p className='movie-ename text-ellipsis'>The Mummy</p>
              <div className='movie-score'>
                <div className='left-score'>
                  <p>用户评分</p>
                  <span>{ (sc).toFixed(1) }</span>
                  <span>(11万评分)</span>
                </div>
                <div className='score-line'></div>
                <div className='right-score'>
                  <p>专业评分</p>
                  <span>4.6</span>
                  <span>(22评分)</span>
                </div>
              </div>
              <div className='movie-category'>
                <span className='movie-cat'>{ cat }</span>
              </div>
              <p className='movie-content-row'>{ src }／{ pn }分钟</p>
              <p className='movie-content-row text-ellipsis'>{ rt }</p>
            </div>
          </section>,
          <section className='movie-dra' key='movie-section-2'>
            <a href='javaScript:void(0);'>立即购票</a>
            <div>{ (dra.replace(/<p>/, '')).replace(/<\/p>/, '') }</div>
          </section>,
          <section className='movie-tips' key='movie-section-3'>
            <h3>观影小贴士</h3>
            <img src='http://p1.meituan.net/mmdb/e49359ae45d86640f5f050b002413b601915.png'/>
            <span>小学生及学龄前儿童应在家长陪同下观看</span>
          </section>,
          <section className='movie-celebrities' key='movie-section-4'>
            <ul className='movie-celebrities-detail'>
              { this.state.moviePhotosArr }
            </ul>
          </section>
        ] : [
          <div className='mp-loading main-loading ant-col-24' key='movie-detail-loading'>
            <span className='spin'></span>
            正在努力加载
          </div>
        ]}
      </div>
    )
  }
}
MovieD.contextTypes = {
  myCtxtObject: PropTypes.object.isRequired
}

export default MovieD;
