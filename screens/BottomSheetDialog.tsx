import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const BottomSheetDialog = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleBottomSheet} style={styles.openButton}>
                <Text>Open Bottom Sheet</Text>
            </TouchableOpacity>

            <Modal
                isVisible={isBottomSheetVisible}
                style={styles.bottomModal}
                onBackdropPress={toggleBottomSheet}
                onBackButtonPress={toggleBottomSheet}
            >
                <View style={styles.bottomModalContent}>
                    <Text>This is the content of the Button Sheet.</Text>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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

export default BottomSheetDialog;