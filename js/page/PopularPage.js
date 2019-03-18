
import React, {Component} from 'react';
import {
    createAppContainer,
    createMaterialTopTabNavigator
} from 'react-navigation'
import {FlatList, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil'

import {connect} from "react-redux";
import actions from '../action/index'


type Props = {};
 class PopularPage extends Component<Props> {
    constructor(props){
        super(props)
        this.tabNames = ['Java','Android','IOS','React','React Native','PHP']
    }
    _genTabs(){
        const tabs = {}
        this.tabNames.forEach((item,index) => {
            tabs[`tab${index}`] = {
                screen: props => <PopularTab {...props} tabLabel = {item}/>,
                navigationOptions:{
                    title:item
                }
            }
        });
        return tabs;
    }
    render() {
        const TabNavicator = createAppContainer(createMaterialTopTabNavigator(this._genTabs(),{
            tabBarOptions:{
                tabStyle:styles.tabStyle,
                upperCaseLabel:false,//是否使标签大写，默认为true
                scrollEnabled:true, //是否支持选项卡滚动 默认 false
                style:{
                    backgroundColor: '#678' // TabBar 的背景色
                },
                indicatorStyle: styles.indicatorStyle,// 标签指示器的样式
                labelStyle: styles.labelStyle // 文字的样式
            }
        }
            ))
        return (
            <View style={{flex: 1,marginTop:30}}>
               <TabNavicator/>
            </View>
        );
    }
}
class PopularTab extends Component<Props> {
     constructor(props){
         super(props)
         const {tabLabel} = this.props
         this.storeName = tabLabel
     }
     componentDidMount(): void {
         this.loadData()
     }
    loadData(){
         const {onLoadPopularData} = this.props
        const url = this.genFetchUrl(this.storeName)
        onLoadPopularData(this.storeName,url)
    }
    genFetchUrl(key){
         return URL + key + QUERY_STR
    }

    render(){

        return (
            <View style={styles.container}>
                <Text>{tabLabel}</Text>
                <Text
                    onPress={() => {
                         NavigationUtil.goPage('DetailPage')}}>
                    跳转到详情页
                </Text>
            </View>
        )
    }

}
const mapStateToProps = state => ({
    popular: state.popular,
});
const mapDispatchToprops = dispatch => ({
    onThemeChange: (storeName,url) => dispatch(actions.onLoadPopularData(storeName,url))
})
export default connect(mapStateToProps,mapDispatchToprops)(PopularPage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    tabStyle: {
        minWidth:50
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: "white"

    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6

    }

});
