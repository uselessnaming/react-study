import React, {useState, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WifiScreen from './screens/WifiScreen';
import { Text, View } from 'react-native';
import BottomOpenButton from './component/BottomOpenButton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as RNLocalize from 'react-native-localize';

const Tab = createBottomTabNavigator();

export default function App(){

  const [language, setLanguage] = useState<string>('');

  useEffect(() => {
    const currentLanguage = RNLocalize.getLocales()[0]?.languageCode || 'en';
    setLanguage(currentLanguage);
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <WifiScreen/> */}
      <Text>현재 언어 : {language}</Text>
    </GestureHandlerRootView>
  );
}