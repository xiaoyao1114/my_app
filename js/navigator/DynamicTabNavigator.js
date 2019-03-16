/**
 *Created by shaoli on 2019-03-09
 */

import React, {Component} from 'react';
import {
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation'
import {Platform, StyleSheet, Text, View} from 'react-native';

import PopularPage from '../page/PopularPage'
import TrendingPage from '../page/TrendingPage'
import FavoritePage from '../page/FavoritePage'
import MyPage from '../page/MyPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import {BottomTabBar} from 'react-navigation-tabs'
import {connect} from "react-redux";

type Props = {};
const TABS = { //在这里配置页面的路由
    PopularPage:{
        screen:PopularPage,
            navigationOptions:{
            tabBarLabel:"最热",
                tabBarIcon:({tintColor,focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    TrendingPage:{
        screen:TrendingPage,
            navigationOptions: {
            tabBarLabel: "趋势",
                tabBarIcon:({tintColor,focused}) => (
                <Feather
                    name={'trending-up'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    FavoritePage:{
        screen:FavoritePage,
            navigationOptions:{
            tabBarLabel:'收藏',
                tabBarIcon:({tintColor,focused}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }

    },
    MyPage:{
        screen:MyPage,
            navigationOptions:{
            tabBarLabel:'我的',
                tabBarIcon:({tintColor,focused}) => (
                <AntDesign
                    name={'user'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    }
}

  class DynamicTabNavigator extends Component<Props> {
    constructor(props){
        super(props)
        console.disableYellowBox = true
    }
    _tabNavigator(){
        if (this.Tabs){
            return this.Tabs
        }
        const {PopularPage,TrendingPage,FavoritePage,MyPage} = TABS
        const tabs = {PopularPage,TrendingPage,FavoritePage,MyPage} //根据需要定制显示的页面
        return this.Tabs =  createAppContainer(
            createBottomTabNavigator(tabs,{
                tabBarComponent:props => {
                    return <TabBarComponent theme={this.props.theme} {...props}/>
                    }})
        )
    }
    render() {
        const Tab = this._tabNavigator()
        return <Tab/>

    }
}
class TabBarComponent extends React.Component{
    constructor(props){
        super(props)
        this.theme = {
            tintColor: props.tintColor,
            updateTime:new Date().getTime()
        }
    }
    render() {

        return <BottomTabBar
            {...this.props}
            activeTintColor = {this.props.theme}
        />
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
