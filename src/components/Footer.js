import React, { Component } from 'react';

class MaoYanFot extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <footer className='footer-main'>
        <p>
         友情链接：
         <a href='//a.maoyan.com' target='_blank' className='link-a'>猫眼票房分析</a>
         <a href='//i.meituan.com' target='_blank'>美团网</a>
        </p>
        <p>
          ©️ 猫眼电影 客服电话：
          <a data-evt='ft/hotline' href='tel:10105335'>1010-5335</a>
        </p>
        <div className='fotIcp'>
          <p>
            <a href='http://www.miibeian.gov.cn/' target='_blank' className='icp-a'>京ICP备16022489号-1</a>
            <a href='http://www.beian.gov.cn/' target='_blank'>京公网安备 11010502030881号</a>
          </p>
          <p>
            <a href='javascript:void(0);'>北京猫眼文化传媒有限公司</a>
          </p>
        </div>
      </footer>
    )
  }
}

export default MaoYanFot;

