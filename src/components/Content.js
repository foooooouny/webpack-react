import React, { Component } from 'react';
import PropTypes from 'prop-types';
import myAction from '../actions';
import MovieListCnt from './movieList';
import QueueAnim from 'rc-queue-anim';
import MaoYanCnt from './myContent';
// import injectTapEventPlugin from 'react-tap-event-plugin';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
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

  // 如果使用的 es6 语法，可以直接定义 defaultProps 这个类属性代替。更直观的知道 defaultProps 是预先定义好的值。
  // props 的初始值
  // static defaultProps = {
  //   width: 500
  // }

  // static propTypes = {

  // }

  // 只有组件创建时调用一次并 `缓存` 的对象,只有在 React.createClass 的时候才可以使用
  // 因为这个方法在实例初始化之前调用，所以不能依赖 this 获取到组件的实例
  // 在这个组件装载之后，这个方法缓存的结果会用来保证访问 this.props 的属性时，当这个属性没有在父组件中传入，也是有值的。

   // getDefaultProps () {

  // }

  // 只会在装载之前调用一次， 在 render 之前调用，可以在这个方法里面调用 setState 改变状态，并且不会导致额外调用一次 render
  componentWillMount() {

  }

  // 只会在装载之后调用一次，在 render 之后调用，从这里开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点
  componentDidMount() {
    // this.getMovieList();
  }

  // 更新组件触发
  // 这些方法不会在首次 render 组件的周期调用
  // componentWillReceiveProps () {

  // }

  // shouldComponentUpdate() {

  // }

  // componentWillUpdate() {

  // }

  // componentDidUpdate() {

  // }

  // // 卸载组件触发
  // componentWillUnmount() {

  // }
  // 获取 movieList
  getMovieList() {
    let url = '/api/movie/list.json',
        movieListD = [];
    myAction.getHomePageList(url, this.state.mListParam)
      .then((d) => {
        if (d.data.data.movies.length === 0) {
          this.setState({
            moreMovie: !this.state.moreMovie
          })
          return false;
        }
        for(let item of d.data.data.movies) {
          movieListD.push(<MovieListCnt key = {item.id} mListData = {item}/>);
        }
        this.setState({
          mListData: this.state.mListData.concat(movieListD),
          mListParam: {
            type: 'hot',
            offset: this.state.mListParam.offset + this.state.mListParam.limit,
            limit: 10
          }
        })
        if (!this.state.show) {
          setTimeout(() => {
            this.updateShow();
          }, 300);
        } else {
          this.setState({
            loadMovie: !this.state.loadMovie
          })
        }
      })
      .catch((err) => {
        this.setState({
          movieListErr: (<li>{ `哎哟，不妙哦，出错了! ${err}` }</li>)
        })
      })
  }
  updateState(value) {
    this.setState({
      loadMovie: !this.state.loadMovie
    })
    this.getMovieList();
    console.log(value);
  }
  updateShow() {
    this.setState({
      show: !this.state.show
    })
  }
  // handleClick(e) {
  //   console.log(e);
  //   console.log(getApiData('http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10'));
  // }

  render() {
    return (
      <div className='cnt-main'>
        <ul className='row cnt-navbar'>
          <li className='ant-col-12'>
            <a href='javascript:void(0);' className='active'>影片</a>
          </li>
          <li className='ant-col-12'>
            <a href='javascript:void(0);' onClick={this.updateShow.bind(this)}>影院</a>
          </li>
        </ul>
        <MaoYanCnt/>
        {/*<QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
          { this.state.show ? [
            <div key='mList'>
              <ul className='movie-list ant-col-24'>
                <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                  {this.state.show ? [
                    this.state.mListData
                  ] : null}
                </QueueAnim>
              </ul>
              { this.state.moreMovie ? [
                !this.state.loadMovie ? [
                  <a className='load-more ant-col-24' href='javaScript:void(0);' onClick={this.updateState.bind(this, this.state.mListParam)} key='loadMore'>加载更多影片
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
          ] : null}
        </QueueAnim>*/}
        {!this.state.show ? [
          <div className='mp-loading main-loading ant-col-24' key='main-loading'>
            <span className='spin'></span>
            正在努力加载
          </div>
        ] : null }
      </div>
    )
  }
}
Content.defaultProps = {
  width: 500
}
Content.propTypes = {
  optionalArray: PropTypes.array
}
export default Content;
