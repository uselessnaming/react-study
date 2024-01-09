import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet, TouchableOpacity, Button, Easing } from "react-native";

interface ButtonProps{
    onPress: () => void;
}

const BottomOpenButton : React.FC<ButtonProps> = ({onPress}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button]} onPress={onPress}>
                <Animated.View >
                    <Button color='darkgray' title='TESTTEST' onPress={onPress}/>
                </Animated.View>
            </TouchableOpacity>
        </View>    
    );
}

const styles = StyleSheet.create({
    container:{
        height: 10,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    button: {
        width: '20%',
        height: 10
    }
})

export default BottomOpenButton;