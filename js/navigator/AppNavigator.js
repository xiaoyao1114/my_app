import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation'
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'

const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            header:null
        }

    }
})
const MainNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            header:null
        }

    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{

        }

    }
})
export  default createAppContainer(createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator
    }, {
    defaultNavigationOptions:{
        header:null //通过将header设置为null 来禁用StackNavigator的Navigation Bar
    }


}))
