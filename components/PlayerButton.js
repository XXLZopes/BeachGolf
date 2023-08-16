import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'; 

export default function PlayerButton({setModalVisible, playerList, setPlayerList, scoreTotalArray, setScoreTotalArray}) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={[styles.button, styles.removeButton]}
                onPress={() => {
                    setPlayerList(playerList.slice(0, -1));
                    scoreTotalArray ? setScoreTotalArray(scoreTotalArray.slice(0, -1)) : console.log('Score array empty');
                    console.log(scoreTotalArray)

                }}
            >
                <Text style={styles.removeButtonText}>Remove Last Player</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, styles.addButton]}
                onPress={() => {
                    setModalVisible(true)
                }}
            >
                <Text style={styles.addButtonText}>Add Player</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '3%'
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeButton: {
        backgroundColor: '#FF564B',
    },
    addButton: {
        backgroundColor: '#4B87FF',
    },
    addButtonText: {
        color: 'white'
    },
    removeButtonText: {
        color: 'white',
    },
});
