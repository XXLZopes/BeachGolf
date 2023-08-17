import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions, Alert } from 'react-native'; 

export default function PlayerButton({setModalVisible, playerList, setPlayerList, scoreTotalArray, setScoreTotalArray}) {
    return (
        <View style={styles.buttonContainer}>

            <TouchableOpacity 
                style={[styles.button, styles.addButton]}
                onPress={() => {
                    playerList.length < 4 
                    ? setModalVisible(true)
                    : Alert.alert('Upgrade to premium to increase player count.');
                }}
            >
                <Text style={styles.addButtonText}>Add Player</Text>
            </TouchableOpacity>
        </View>
    );
}
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    buttonContainer: {
        width: deviceWidth - 20 + 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '3%'
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#F2A900',
        padding: 10,
        // margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeButton: {
        backgroundColor: '#FF564B',
    },
    addButton: {
        backgroundColor: '#FFC72C',
    },
    addButtonText: {
        color: '#004C46',
        fontWeight: 'bold',
    },
});
