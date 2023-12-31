import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';

export default function NewPlayerModal({modalVisible, setModalVisible, newPlayer, setNewPlayer, playerList, setPlayerList, scoreTotalArray, setScoreTotalArray}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
            onChangeText={playerName => setNewPlayer(playerName)}
            style={styles.inputField}
                placeholder="Player name"
                placeholderTextColor="gray"
            />
            <View style={styles.buttonContainer}>

            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={() => {
                setModalVisible(!modalVisible)
                setNewPlayer('')
                }}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>            
            <Pressable
              style={[styles.button, styles.buttonSave]}
              onPress={() => {
                newPlayer ? setScoreTotalArray([...scoreTotalArray, []]) : console.log('canceled');
                newPlayer ? setPlayerList([...playerList, newPlayer]) : console.log('canceled');
                setNewPlayer('');
                setModalVisible(!modalVisible)}}>
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable>
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '95%',
    margin: 20,
    backgroundColor: '#F5F3E7',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    padding: 5
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '5%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '40%',
  },

  buttonCancel: {
    backgroundColor: '#bb4130',
},
// buttonSave: {
//     backgroundColor: '#4B87FF',
// },
  buttonSave: {
    backgroundColor: '#2e7194',
  },
  // buttonCancel: {
  //   backgroundColor: 'red',
  // },
  textStyle: {
    color: '#F5F3E7',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});