import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

export default function PlayerList({ setSelectedPlayer, playerList, scoreTotalArray, setEditPlayerModalVisible, editPlayerModalVisible }) {
  return (
    <View style={styles.playerList}>
      {playerList.map((playerName, playerIndex) => (
        <Pressable 
        onPress={
          ()=>{
            setEditPlayerModalVisible(!editPlayerModalVisible);
            setSelectedPlayer(playerIndex);
          }
        }
        style={styles.playerInfoCon} key={playerName}>
          <Text>{playerName}</Text>
          <Text>
            {scoreTotalArray[playerIndex]
              ? scoreTotalArray[playerIndex].reduce(
                  (acc, curr) => acc + Number(curr || 0),
                  0
                )
              : 0}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  playerList: {
    width: "100%",
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  playerInfoCon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#F5F3E7',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
