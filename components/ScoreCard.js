import React from "react";
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ScoreCard({
  playerList,
  setPlayerIndex,
  setHoleIndex,
  scoreModalVisible,
  setScoreModalVisible,
  scoreTotalArray,
}) {
  const skipHole = 10;
  let holes = 18;
  let playerTotal = playerList.length;

  return (
    <View style={styles.outerContainer}>
    <ScrollView style={styles.table}>
      {/* Header Row */}
      <View style={styles.row}>
        <View style={styles.headerCell}>
          <Text>Hole</Text>
        </View>
        {[...Array(playerTotal)].map((_, playerIndex) => (
          <View key={playerIndex} style={styles.headerCell}>
            <Text>{playerList[playerIndex]}</Text>
          </View>
        ))}
      </View>

      {/* Hole Rows */}
      {[...Array(holes)].map((_, holeIndex) =>
        holeIndex != skipHole - 1 ? (
          <View key={holeIndex} style={styles.row}>
            <View
              style={[
                styles.headerCell,
                // holeIndex + 1 === holes ? styles.noBottomBorder : null,
              ]}
            >
              <Text>{`${holeIndex + 1}`}</Text>
            </View>

            {[...Array(playerTotal)].map((_, playerIndex) => (
              <TouchableOpacity
                key={playerIndex}
                style={styles.cell}
                onPress={() => {
                  setPlayerIndex(playerIndex);
                  setHoleIndex(holeIndex);
                  setScoreModalVisible(!scoreModalVisible);
                  console.log(playerIndex);
                  console.log(holeIndex);
                }}
              >
                <Text style={styles.cellText}>
                  {scoreTotalArray[playerIndex][holeIndex]
                    ? scoreTotalArray[playerIndex][holeIndex]
                    : "___"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          console.log("skipped")
        )
      )}
    </ScrollView>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const scoreCardWidth = deviceWidth - 20;
const maxScoreCardHeight = deviceHeight - 200;

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: '5%',
    width: scoreCardWidth,
    borderWidth: 1,
    backgroundColor: "rgb(255,255,230)",
  },
  table: {
    width: scoreCardWidth,
    maxHeight: maxScoreCardHeight,  // Adjust this as per your requirement
  },
  
  row: {
    flexDirection: "row",
  },
  headerCell: {
    borderWidth: 1,
    borderColor: "black",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    width: (scoreCardWidth) / 5, // or any desired width
    backgroundColor: "#f2f2f2",
  },
  cell: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: (scoreCardWidth) / 5, // or any desired width
    backgroundColor: "white",
  },
  input: {
    width: "100%",
    textAlign: "center",
  },
  scoreCardCon: {
    width: "100%",
    justifyContent: "flex-start",
  },
  // noBottomBorder: {
  //   borderBottomWidth: 0,
  // }
});
