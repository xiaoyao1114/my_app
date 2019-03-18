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
export function onLoadPopularData(storeName, url) {
    return dispatch => {
        dispatch({type: Types.POPULAR_REFRESH, storeName: storeName})
        let dataStore = new DataStore()
        dataStore.fetchData(url)
            .then(data => {
                handleData(dispatsh, storeName, data)
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type:Types.LOAD_POPULAR_FAIL,
                    storeName,
                    error
                })
            })
    }
}

function handleData(dispatsh, storeName, data) {
    dispatsh({
        type: Types.LOAD_POPULAR_SUCCESS,
        items: data && data.data && data.data.items,
        storeName
    })
}

