/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
//test git
import {AppRegistry} from 'react-native';
import AppNavigator from './js/navigator/AppNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
