/**
 *Created by shaoli on 2019-03-17
 */
import Types from '../types'
import DataStore from '../../expand/dao/DataStore'

/**
 * 获取最热数据的一步action
 * @param storeName
 * @param url
 * @returns {Function}
 */
export function onRefreshPopular(storeName, url,pageSize) {
    return dispatch => {
        dispatch({type: Types.POPULAR_REFRESH, storeName: storeName})
        let dataStore = new DataStore()
        dataStore.fetchData(url)
            .then(data => {
                handleData(dispatch, storeName, data,pageSize)
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type:Types.POPULAR_REFRESH_FAIL,
                    storeName,
                    error
                })
        })
    }
}
function handleData(dispatch, storeName, data,pageSize) {
    let fixItems = [];
    if (data && data.data && data.data.items) {
        fixItems = data.data.items
    }
    dispatch({
        type: Types.POPULAR_REFRESH_SUCCESS,
        items: fixItems,
        storeName,
        projectModels:pageSize>fixItems.length?fixItems:fixItems.slice(0,pageSize),//第一次要加载的数据
        pageIndex:1
    })
}
/**
 * 加载更多
 * @param storeName
 * @param pageIndex 第几页
 * @param pageSize 每页展示条数
 * @param dataArray 原始数据
 * @param callBack 回调函数，可以通过回调函数来向调用页面通信：比如异常信息的展示，没有更多等待
 * @param favoriteDao
 * @returns {function(*)}
 */
export function onLoadMorePopular(storeName, pageIndex, pageSize, dataArray = [], callBack) {
    return dispatch => {
        setTimeout(() => {//模拟网络请求
            if ((pageIndex - 1) * pageSize >= dataArray.length) {//已加载完全部数据
                if (typeof callBack === 'function') {
                    callBack('没有更多了')
                }
                dispatch({
                    type: Types.POPULAR_LOAD_MORE_FAIL,
                    error: '没有更多了',
                    storeName: storeName,
                    pageIndex: --pageIndex,
                })
            } else {
                //本次和载入的最大数量
                let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageSize * pageIndex;
                dispatch({
                    type: Types.POPULAR_LOAD_MORE_SUCCESS,
                    storeName,
                    pageIndex,
                    projectModels: dataArray.slice(0, max),
                })
            }
        }, 500);
    }
}

