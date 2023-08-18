import {abort} from 'process';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function EditPlayerModal({
  editPlayerModalVisible,
  setEditPlayerModalVisible,
  newPlayer,
  setNewPlayer,
  playerList,
  setPlayerList,
  scoreTotalArray,
  setScoreTotalArray,
  selectedPlayer,
}) {
  const [editPlayerState, setEditPlayerState] = useState(0);
  let updatedPlayerName = '';
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={editPlayerModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setEditPlayerModalVisible(!editPlayerModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {editPlayerState === 0 ? (
              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setEditPlayerModalVisible(!editPlayerModalVisible);
                    setNewPlayer('');
                  }}>
                  <Text style={styles.deleteTextStyle}>X</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonDelete]}
                  onPress={() => {
                    setEditPlayerState(2);
                  }}>
                  <Text style={styles.textStyle}>Remove</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonSave]}
                  onPress={() => {
                    setEditPlayerState(1);
                  }}>
                  <Text style={styles.textStyle}>Edit</Text>
                </Pressable>
              </View>
            ) : editPlayerState === 1 ?(
              <>
                <TextInput
                  onChangeText={playerName => updatedPlayerName = playerName}
                  style={styles.inputField}
                  placeholder="Edit Name"
                  placeholderTextColor="gray"
                />
                <View
                style={[styles.buttonContainer]}
                >
                <TouchableOpacity
                  style={[styles.button, styles.buttonCancel]}
                  onPress={() => {
                    setEditPlayerModalVisible(!editPlayerModalVisible);
                    setEditPlayerState(0);
                  }}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.button, styles.buttonSave]}
                  onPress={() => {
                    let updatedPlayerList = [...playerList]
                    updatedPlayerList[selectedPlayer] = updatedPlayerName;
                    updatedPlayerName ? setPlayerList([...updatedPlayerList]) : console.log('nothing changed');
                    updatedPlayerName = '';
                    setEditPlayerModalVisible(!editPlayerModalVisible);
                    setEditPlayerState(0);
                  }}>
                  <Text style={styles.textStyle}>Confirm</Text>
                </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
              <Text style={styles.confirmDelete}>Are you sure you want to delete this player?</Text>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonDelete]}
                  onPress={() => {
                    setEditPlayerState(0);
                    setEditPlayerModalVisible(!editPlayerModalVisible);
                  }}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonSave]}
                  onPress={() => {
                    setPlayerList([
                      ...playerList.slice(0, selectedPlayer),
                      ...playerList.slice(selectedPlayer + 1),
                    ]);
                    scoreTotalArray[0]
                      ? setScoreTotalArray([
                          ...scoreTotalArray.slice(0, selectedPlayer),
                          ...scoreTotalArray.slice(selectedPlayer + 1),
                        ])
                      : console.log('Score array empty');
                    // scoreTotalArray
                    //   ? setScoreTotalArray(scoreTotalArray.slice(0, -1))
                    //   : console.log('Score array empty');
                    // console.log(scoreTotalArray)
                    setEditPlayerModalVisible(!editPlayerModalVisible);
                    setEditPlayerState(0);
                  }}>
                  <Text style={styles.textStyle}>Confirm</Text>
                </Pressable>
              </View>
              </>
            )}
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
    padding: 5,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '5%',
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
  buttonClose: {
    position: 'absolute',
    top: '-70%',
    left: '100%',
    padding: 0,
    width: '?',
    height: '?',
    backgroundColor: '#F5F3E7',
    justifyContent: 'center',
  },
  deleteTextStyle: {
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  buttonSave: {
    backgroundColor: '#2e7194',
  },
  buttonDelete: {
    backgroundColor: '#bb4130',
  },
  textStyle: {
    color: '#F5F3E7',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  confirmDelete: {
    fontSize: 17,
    marginBottom: 10,
  }
});
