/*
* 全局导航跳转工具类*/

export default class NavigationUtil{
    /**
     * 跳转到致定页面
     * @param params 要传递的参数
     * @param page 要跳转的页面
     */
    static goPage(page){
       const navigation = NavigationUtil.navigation
        console.log(333,navigation)
        if(!navigation){
            console.log('NavigationUtil.navigation can not be null')
            return
        }else {
            navigation.navigate(page)
        }
    }
    /**
     * 返回上一页
     * @param navigation
     */
    static goBack(navigation){
        navigation.goBack()
    }
    /**
     * 重置到首页
     * @param navigation
     */
    static resetToHomePage(params){
        const {navigation} = params
        navigation.navigate('Main')
    }
}
