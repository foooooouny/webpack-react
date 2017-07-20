import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CinemasDetail extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let detailObj = this.props.detailObj,
        { id, nm, addr, sell, imax } = detailObj;
    return(
      <li>
        <a href='javaScript:void(0);' data-id={ id }>
          <h4>
            <span>{ nm }</span>
            { imax ? [
              <em className='imax' key='imax'>IMAX厅</em>
            ] : null }
            { sell ? [
              <em key='zuo'>座</em>
            ] : null }
          </h4>
          <p>{ addr }</p>
        </a>
      </li>
    )
  }
}

CinemasDetail.contextTypes = {
  myCtxtObject: PropTypes.object.isRequired
}
CinemasDetail.propTypes = {
  detailObj: PropTypes.object.isRequired
}

export default CinemasDetail;
