import Config from '../config';
import 'whatwg-fetch';
import { Papi } from 'chameleon/native';

export function getImageUrl(url) {
    var newUrl = url ? url : '';
    if(url && url[url.length-1] != '/'){
        newUrl = url + '/';
    }
    return newUrl;
}

export function dealArr(arr) {
  let newArr = [];
  let lastPage = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]){
      // alert(JSON.stringify(arr[i]))
      if (!newArr[arr[i].paperNo-1]) {
        newArr[arr[i].paperNo-1] = {};
      }
      // if (arr[i].paperNo !== lastPage+1) {
      //   newArr[arr[i].paperNo-1].page = lastPage+1;
      // } else {
        newArr[arr[i].paperNo-1].page = arr[i].paperNo;
      // }
      // lastPage = newArr[arr[i].paperNo-1].page;

      if(newArr[arr[i].paperNo-1].questions) {
        newArr[arr[i].paperNo-1].questions.push(arr[i]);
      } else {
        newArr[arr[i].paperNo-1].questions = [arr[i]];
      }
    }


  }
  let newRankArr = [];
  for (let m = 0; m < newArr.length; m++) {
    if (newArr[m]) {
      if (newArr[m].page !== lastPage + 1) {
        newArr[m].page = lastPage + 1;
      }
      newRankArr.push(newArr[m]);
      lastPage = lastPage + 1;
    }

  }
  return newRankArr;
}

export const queryContent = (tfsContent) => {
  const tfsUrl = Config.TFS_URL.substring(0, Config.TFS_URL.length - 1) === '/' ? Config.TFS_URL : `${Config.TFS_URL}/`;
  return fetch(tfsUrl + tfsContent).then(res => res.json()).then(res => res || null);
};

export function isValueInArray(id, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].suggestId === id) {
      return i;
    }
  }
  return -1;
}

export function getIndexBaseId(arr, id) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return i;
    }
  }
  return -1;
}

export function getIconText(index) {
  const iconArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
  return typeof index === 'number' ? iconArr[index] : '';
}

export function getBackgroundStatus(value) {
  if (value && value.indexOf('img') !== -1) {
    return value.slice(4)
  } else if (value && value.indexOf('color') !== -1){
    return value.slice(6)
  } else {
    return '';
  }

}
export function randomColor(index) {
  const colorArr = ['#a2be06', '#cdcf00', '#e4b115', '#e0802a', '#dd6b58', '#3F4B3B'];
  if (index < colorArr.length) {
    return colorArr[index];
  } else {
    return colorArr[5]
  }
}

export function paRequest(params, level) {
    return Papi.request(Config.API, params, level).catch((error) => {
        errorHandler(error);
    });
}

function errorHandler(error) {
    console.log(error);
}

export function isH5() {
  return window && window.location && window.location.href && window.location.href.indexOf('channel') !== -1;
}
export function isShouxianApp() {
  console.log(getParameterByName('channel'));
}

export function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(window.location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export function is360Test(id) {
  return [37, 1].indexOf(id) !== -1;
}
