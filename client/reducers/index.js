/**
 * 开发reducer之前,一定要确定state对象的结构
 * 另外,reducer是一个纯函数,接收旧的state和action,返回新的state
 */
import { combinReducers } from 'redux';

import todos from './todos';

const rootReducer = combinReducers({
    todos
});

export default rootReducer;