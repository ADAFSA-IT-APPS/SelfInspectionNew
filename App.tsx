/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef } from 'react';
import type {PropsWithChildren} from 'react';
import NavigationService from "./src/navigation/NavigationService";
import './src/i18n'
import Stacks from "./src/navigation/stack";
import SplashScreen from "react-native-splash-screen";
import { Provider } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import SI_reducer from "./src/Redux/reducers/SI_reducer";
import CustomError from "./src/Components/modals/CustomeError";
import { persistReducer, persistStore } from 'redux-persist';/* redux-persist/es/persistReducer */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootSiblingParent } from 'react-native-root-siblings';
import ForegroundHandler from './src/assets/Helpers/Foreground_Handler'
import { requestUserPermission, NotificationListner, backgroundHandler } from './src/assets/Helpers/Pushnotification_Helper'
import { LogBox } from 'react-native';
import wss from "./src/assets/Helpers/helpers";
window.navigator.userAgent = "react-native";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const persistConfig = {
  timeout: 1000,
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, SI_reducer)

// let store = createStore(persistedReducer, applyMiddleware(thunk.default))
// let persistor = persistStore(store)
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView>
 
      <Text style={{color:'red',alignItems: 'center'}}>test</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
