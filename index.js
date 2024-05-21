// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import uuid from 'react-native-uuid';
// import { LogBox } from 'react-native';
// import { Provider } from 'react-redux'
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();

// function HeadlessCheck({ isHeadless }) {
//     if (isHeadless) {
//         return null;
//     }  
//     return (
//         <App />
//     );
// }
// AppRegistry.registerComponent(appName, () => HeadlessCheck);

/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

