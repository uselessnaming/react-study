import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WifiIcon from "../component/WifiIcon";
import WifiInput from "../component/WifiInput";

const WifiScreen : React.FC = () => {
    const Pulse = require('react-native-pulse').default
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.avatarContainer}>
                <WifiIcon 
                    onPress = {() => {}}
                    isScan = {false}
                />
            </View>
            <View style={styles.listContainer}>
                <WifiInput/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#101945',
      display: 'flex',
      rowGap: 16,
    },
    avatarContainer: {
      flex: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 24,
    },
    listContainer: {
        flex: 3,
        display: 'flex',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
  });

export default WifiScreen;