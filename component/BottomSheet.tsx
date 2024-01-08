import React, {useState} from "react";
import {View, StyleSheet, Text} from 'react-native';
import Modal from "react-native-modal";

interface BottomSheetProps{
    isOpen: boolean;
    onDismiss: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({isOpen, onDismiss}) => {

    return (
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