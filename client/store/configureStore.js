import { createStore } from 'redux';
import rootReducer from '../reducers/index';

/***
 *
 * Store就是把reducer和action联系到一起的对象
 * 1,维持应用的state;
 * 2,提供 getState() 方法获取 state;
 * 3,提供 dispatch(action) 更新state;
 * 4,通过 subscribe(listener) 注册监听器;
 * 5,通过 subscribe(listener) 返回的函数注销监听器
 *
 * 注意:
 * Redux应用只有一个单一的store。当需要拆分数据处理逻辑时,应该使用 reducer组合
 * 而不是创建多个store
 * 根据已有的reducer创建store是非常容易的。
 */

const configureStore = (preloadedState) => {
    // 第二个参数是可选的,用于设置state初始状态
    const store = createStore(rootReducer,preloadedState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default
            store.replaceReducer(nextReducer)
        })
    }

    return store
};

export default configureStore;