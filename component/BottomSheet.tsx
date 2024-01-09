import React, {useState, useRef} from "react";
import {View, StyleSheet, Text, Animated} from 'react-native';
import Modal from "react-native-modal";
import { PanGestureHandler, State } from "react-native-gesture-handler";

interface BottomSheetProps{
    isOpen: boolean;
    onDismiss: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({isOpen, onDismiss}) => {

    const translateY = useRef(new Animated.Value(0)).current;

    const handleDownEvent = (event: any) => {

        const translationY = event.nativeEvent.translationY;
        
        console.log("Test", "Gesture recognize");
        if (event.nativeEvent.state === State.ACTIVE){
            if (translationY > 50 && translationY < 150) {
                console.log("Test", "Gesture recognize");
                onDismiss();
            }
        }
        
        Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: false,
        }).start();
    };

    return (
        <Animated.View>
            <PanGestureHandler
                onGestureEvent={handleDownEvent}
                onHandlerStateChange={handleDownEvent}
                simultaneousHandlers={undefined}
            >
                <View style={{backgroundColor: 'black'}}>
                    <Modal
                        isVisible={isOpen}
                        style={styles.bottomModal}
                        onBackdropPress={onDismiss}
                        onBackButtonPress={onDismiss}
                    >
                        <View style={styles.bottomModalContent}>
                            <Text>This is the content of the Button Sheet.</Text>
                        </View>       
                    </Modal>
                </View>
            </PanGestureHandler>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    openButton: {
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0
    },
    bottomModalContent: {
        backgroundColor: 'white',
        padding: 16,
        marginTop: 50,
        flex: 9,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'lightcoral',
        borderRadius: 5,
    },
})

export default BottomSheet;