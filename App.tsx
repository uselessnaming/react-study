import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './BottomTabNavigation';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}