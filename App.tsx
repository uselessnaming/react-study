import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WifiScreen from './screens/WifiScreen';
import { View } from 'react-native';
import BottomOpenButton from './component/BottomOpenButton';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    // <WifiScreen/>
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <BottomOpenButton onPress={() => {}}/>
    </View>
  );
}