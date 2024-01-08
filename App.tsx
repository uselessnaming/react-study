import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WifiScreen from './screens/WifiScreen';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <WifiScreen/>
  );
}