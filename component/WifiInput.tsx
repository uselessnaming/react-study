import React, { useState } from 'react';
import { Dimensions, Text, View, TouchableOpacity, Animated, StyleSheet, PanResponder } from 'react-native';
import BottomOpenButton from './BottomOpenButton';
import BottomSheetDialog from '../screens/BottomSheetDialog';
import BottomSheet from '../component/BottomSheet';

const WifiInput: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenButtonPress = () => {
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.container}>
            <BottomOpenButton onPress={handleOpenButtonPress}/>
            <BottomSheet isOpen={isOpen} onDismiss={handleOpenButtonPress}/>
        </View>    
    );
};

export default WifiInput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5
    }
});