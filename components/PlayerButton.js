import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions, Alert } from 'react-native'; 
import theme from '../assets/theme'; 

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
                <Text style={styles.addButtonText}>Add Golfer</Text>
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
        marginTop: 10
        // paddingTop: '3%'
        // marginBottom: '30%'
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderColor: theme.colors.secondary,
        padding: 20,
        // margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        backgroundColor: theme.colors.accent,
    },
    addButtonText: {
        color: theme.colors.lightest,
        fontWeight: 'bold',
    },
});
