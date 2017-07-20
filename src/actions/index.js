'use strict';
import { get } from './xhr';
import axios from 'axios';
import querystring from 'querystring';

export default {
  /*
  * 获取首页列表信息
  * */
  getHomePageList: (url, params) => {
   const $promise = axios({
      url: url,
      method: 'get',
      params: params,
      withCredentials: true
    });
    return $promise;
  }
}
// export let getApiData = (url, data) => {

//   // if (typeof data === 'object') {
//   //   Object.keys(data).map((v, i) => {
//   //     if (i !== Object.keys(data).length - 1) {
//   //       nData += `${v}=${Object.values(data)[i]}&`;
//   //     } else {
//   //       nData += `${v}=${Object.values(data)[i]}`;
//   //     }
//   //   })
//   // }
  // return new Promise(function(resolve, reject) {
  //   // axios.get(url, { params : data })
  //   // .then(function(response) {
  //   //   return resolve(response);
  //   // })
  //   // .catch(function(error) {
  //   //   return reject(error);
  //   // })
  //   get('', {}, '', (resdata) => {
  //     return resolve(resdata);
  //   }, (errdata) => {
  //     return reject(errdata);
  //   });
  // });
// }

