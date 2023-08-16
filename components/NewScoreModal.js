import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";

export default function NewScoreModal({
  scoreModalVisible,
  setScoreModalVisible,
  newScore,
  setNewScore,
  scoreTotalArray,
  setScoreTotalArray,
  playerIndex,
  setHoleIndex,
  holeIndex,
  playerList,
  setPlayerIndex,
}) {
  const [inputValue, setInputValue] = useState("");
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={scoreModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setScoreModalVisible(!scoreModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text>{playerList[playerIndex]}</Text> */}
            <View style={styles.holeInputCon}>
                <Text style={styles.holeInput}>{playerList[playerIndex]} | Hole: </Text>
              <TextInput
                onChangeText={hole => setHoleIndex(hole - 1)}
                style={styles.holeInput}
                keyboardType="numeric"
                
              >
                {holeIndex + 1 || ''}
              </TextInput>
            </View>

            <TextInput
            value={inputValue}
              onChangeText={
                (playerName) => {
                  setNewScore(playerName);
                  setInputValue(playerName)
                }
              }
              style={styles.inputField}
              keyboardType="numbers-and-punctuation"
              placeholder="Set score"
              placeholderTextColor="gray"
            />
            <View style={styles.buttonContainer}>
              
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => {
                  setScoreModalVisible(!scoreModalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSave]}
                onPress={() => {
                  let newScoreArray = [...scoreTotalArray];
                  newScoreArray[playerIndex][holeIndex] = newScore;
                  scoreTotalArray[0]
                    ? setScoreTotalArray(newScoreArray)
                    : console.log("canceled");
                    playerIndex < playerList.length - 1 
                    ?
                    setPlayerIndex(playerIndex+1)
                    :
                    setScoreModalVisible(!scoreModalVisible);
                    setInputValue("");
                }}
              >
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "95%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    borderColor: "black",
    fontSize: 20,
    padding: 5,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: "5%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "40%",
  },
  buttonSave: {
    backgroundColor: "blue",
  },
  buttonCancel: {
    backgroundColor: "#FF564B",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  holeInputCon: {
    display: 'flex',
    flexDirection: 'row',
  },
  holeInput: {
    fontSize: 20
  }
});
