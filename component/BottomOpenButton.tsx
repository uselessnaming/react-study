import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet, TouchableOpacity, Button, Easing } from "react-native";

interface ButtonProps{
    onPress: () => void;
}

const BottomOpenButton : React.FC<ButtonProps> = ({onPress}) => {

    const translateY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animationInterval = setInterval(() => {
            Animated.timing(translateY, {
                toValue: -50,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }, 500);

        return () => clearInterval(animationInterval);
    }, []);
    
    const startAnimation = () => {
        Animated.timing(translateY, {
            toValue: -100,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            translateY.setValue(0);
            console.log("Test", "do ani");
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={startAnimation}>
                <Animated.View style={[styles.button, {transform: [{translateY}]}]}>
                    <Button color='darkgray' title='TESTTEST' onPress={onPress}/>
                </Animated.View>
            </TouchableOpacity>
        </View>    
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    button: {
        width: '20%',
        height: 10
    }
})

export default BottomOpenButton;