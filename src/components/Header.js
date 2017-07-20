import React, { Component } from 'react';

class MaoYanHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initValue : '66'
    }
    console.log(Component);
  }
  render() {
    return (
      <header className='navbar-main'>
        <div className='navbar-top'>
          <div className='header-left'>
            <a href='javascript:void(0);' className='header-btn logo'>
              <img src='//ms0.meituan.net/canary/img/avatar.png'/>
            </a>
            <div className='header-text'>
              <a href='javascript:void(0)'>猫眼电影</a>
              <p>在线选座，热门影讯，爱上看电影</p>
            </div>
          </div>
          <a href='javascript:void(0);' className='header-btn open-btn'>立即打开</a>
        </div>
        <div className='navbar-bottom'>
          <a href='javascript:void(0);'>
            <span>上海</span>
            <i className="anticon anticon-caret-down"></i>
          </a>
          <a href='javascript:void(0);'>
            <i className="anticon anticon-user"></i>
            <span>我的</span>
          </a>
        </div>
      </header>
    )
  }
}

export default MaoYanHeader;
