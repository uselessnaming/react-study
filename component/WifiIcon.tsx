import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native';
import { Avatar } from 'react-native-elements';

type Props = {
  onPress: () => void;
  isScan: boolean;
};

const WifiIcon: React.FC<Props> = ({onPress, isScan}) => {
  const Pulse = require('react-native-pulse').default;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>
        {isScan ? '연결 중입니다.' : '버튼을 눌러 와이파이를 설정해주세요.'}
      </Text>
      <View style={styles.container}>
        {isScan ? (
          <Pulse
            color="#0592FF"
            numPulses={3}
            diameter={250}
            speed={10}
            duration={1500}
          />
        ) : null}
        <Avatar 
            size={80}
            rounded
            icon={{name:'wifi'}}
            containerStyle={{backgroundColor: '#0592FF'}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    color: 'white',
  },
});
export default WifiIcon;