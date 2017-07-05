import Config from '../config';
import { PaApi, PaUtil, PaRouter, ScrollableTabView } from 'chameleon/native';
export { PaApi, PaUtil, PaRouter, ScrollableTabView } from 'chameleon/native';

var assign = require('object-assign');

// API接口调用方法
export function paRequest(params,level) {
    const body = assign({}, params, {  _st: level, _api: Config.API });
    return PaApi.request(body).catch((error) => {
        errorHandler(error);
    });
}

function errorHandler(error) {
    console.log(error);
}

// 客户端sdk提供方法，包括:
// setTitle(title, pageTage)
// transitionTo(options) {appId, moduleId, container, pageTag, params}
