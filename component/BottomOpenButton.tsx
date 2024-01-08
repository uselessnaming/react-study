import React from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";

interface ButtonProps{
    onPress: () => void;
}

const BottomOpenButton : React.FC<ButtonProps> = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Button color='darkgray' title='' onPress={onPress}/>
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