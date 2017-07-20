import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CinemasDetail from './cinemasDetail';
import { Collapse } from 'antd';

class CinemasList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cinemasShow: false,
      cinemasListData : [],
      cinemasListErr : ''
    }
  }
  componentDidMount() {
    this.getCinemasDetail();
  }
  getCinemasDetail() {
    let url = '/api/cinemas.json',
        cData = {},
        cDataArr = [],
        cinemasLData = [],
        cinemasLDetail = [],
        { MyAction } = this.context.myCtxtObject,
        Panel = Collapse.Panel;
    MyAction.getHomePageList(url)
    .then((d) => {
      // 得到当前ip(上海市)中所有影院信息
      cData = d.data.data;
      // 将对象形式的数据转换为数组形式
      for(let i in cData) {
        cDataArr.push([i, cData[i]]);
      }
      // 便利数组，得到不同地区对应的数据
      cDataArr.forEach((value, index) => {
        // 初始化 cinemasLDetail
        cinemasLDetail = [];
        // 遍历地区中的影院数组
        for(let item of value[1]) {
          cinemasLDetail.push(<CinemasDetail key={ item.id } detailObj={ item }/>);
        }
        // cinemasLData.push(<CinemasDetail key={ i } cKey={ i } cName={ cDataArr[i][0] } cListData={ cDataArr[i][1] } Panel={ Panel }/>);
        cinemasLData.push(<Panel header={ `${ value[0] }  (${ value[1].length }家)` } key={ index }>
                            <ul>
                              { cinemasLDetail }
                            </ul>
                          </Panel>);
      })
      this.setState({
        cinemasListData: this.state.cinemasListData.concat(cinemasLData)
      })
      if (!this.state.cinemasShow) {
        setTimeout(() => {
          this.setState({
            cinemasShow: !this.state.cinemasShow
          })
        }, 300);
      }
    })
    .catch((err) => {
      this.setState({
        cinemasListErr: (<li>{ `哎哟，不妙哦，出错了! ${err}` }</li>)
      })
    })
  }
  changeCollapse(key) {
    console.log(key);
  }

  render() {
    return (
      <section className='cinemas-list'>
        { this.state.cinemasShow ? [
          <Collapse defaultActiveKey={['0']} onChange={ this.changeCollapse } key='cinemas-collapse'>
            { this.state.cinemasListData }
          </Collapse>
        ] : [
          <div className='mp-loading main-loading ant-col-24' key='cinemas-main-loading'>
            <span className='spin'></span>
            正在努力加载
          </div>
        ]}
      </section>
    )
  }
}

CinemasList.contextTypes = {
  myCtxtObject: PropTypes.object.isRequired
}

export default CinemasList;
