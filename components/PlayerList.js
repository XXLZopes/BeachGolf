import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

export default function PlayerList({ playerList, scoreTotalArray }) {
  return (
    <View style={styles.playerList}>
      {playerList.map((playerName, playerIndex) => (
        <View style={styles.playerInfoCon} key={playerName}>
          <Text>{playerName}</Text>
          <Text>
            {scoreTotalArray[playerIndex]
              ? scoreTotalArray[playerIndex].reduce(
                  (acc, curr) => acc + Number(curr || 0),
                  0
                )
              : 0}
          </Text>
        </View>
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
  },
});
