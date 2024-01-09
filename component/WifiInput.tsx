import React, { useState, useRef } from 'react';
import { Dimensions, Text, View, TouchableOpacity, Animated, StyleSheet, PanResponder } from 'react-native';
import BottomOpenButton from './BottomOpenButton';
import BottomSheetDialog from '../screens/BottomSheetDialog';
import BottomSheet from '../component/BottomSheet';
import { State, PanGestureHandler } from 'react-native-gesture-handler';

const WifiInput: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const translateY = useRef(new Animated.Value(0)).current;

    const handleOpenButtonPress = () => {
        setIsOpen(!isOpen);
    };

    const handleUpEvent = (event: any) => {

        const translationY = event.nativeEvent.translationY;
        if (event.nativeEvent.state === State.ACTIVE){
            if (translationY < -50 && translationY > -150) {
                console.log("Test", "Gesture recognize");
                setIsOpen(true);
            }
        }
        
        Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: false,
        }).start();
    };

    return (
        
        <Animated.View style={styles.container}>
            <PanGestureHandler
                onGestureEvent={handleUpEvent}
                onHandlerStateChange={handleUpEvent}
                simultaneousHandlers={undefined}
            >
                <View style={styles.container}>
                    <BottomOpenButton onPress={handleOpenButtonPress}/>
                    <View style={styles.content}>
                        <Text>Test</Text>
                    </View>
                </View>
            </PanGestureHandler>
            <BottomSheet isOpen={isOpen} onDismiss={handleOpenButtonPress}/>  
        </Animated.View>
    );
};

export default WifiInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 5,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    }
});