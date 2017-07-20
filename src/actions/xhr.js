'use strict';

export let get = (url = '', data = '', header = {}, fn, errFn) => {

  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000', true);

  // Object.keys(header).forEach((d) => {
  //   xhr.setRequestHeader(d, header[d]);
  // })

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304 ) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        fn.call(this, JSON.parse(xhr.responseText));
      } else {
        errFn.call(this, JSON.parse(xhr.responseText));
      }
    }
  };

  xhr.onerror = () => {
    errFn.call(this, JSON.parse(xhr.responseText));
  }
  xhr.send();
}

