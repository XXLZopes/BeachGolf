import React from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

import theme from '../assets/theme';

export default function ScoreCard({
  playerList,
  setPlayerIndex,
  setHoleIndex,
  scoreModalVisible,
  setScoreModalVisible,
  scoreTotalArray,
  editPlayerModalVisible,
  setEditPlayerModalVisible,
  setSelectedPlayer,
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
            <Text style={styles.headerCellText}>Hole</Text>
          </View>
          {[...Array(playerTotal)].map((_, playerIndex) => (
            <Pressable
              onPress={() => {
                setEditPlayerModalVisible(!editPlayerModalVisible);
                setSelectedPlayer(playerIndex);
              }}
              key={playerIndex}
              style={styles.headerCell}>
              <Text style={styles.headerCellText}>
                {playerList[playerIndex]} 
              </Text>
              <Text style={styles.headerCellText}>
              {scoreTotalArray[playerIndex]
                  ? scoreTotalArray[playerIndex].reduce(
                      (acc, curr) => acc + Number(curr || 0),
                      0,
                    )
                  : 0}
              </Text>
              
            </Pressable>
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
                ]}>
                <Text style={[styles.cellText]}>{`${holeIndex + 1}`}</Text>
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
                  }}>
                  <Text style={styles.cellText}>
                    {scoreTotalArray[playerIndex][holeIndex]
                      ? scoreTotalArray[playerIndex][holeIndex]
                      : '___'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            console.log('skipped')
          ),
        )}
      </ScrollView>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const scoreCardWidth = deviceWidth - 20 + 2;
const maxScoreCardHeight = deviceHeight - 200;

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 15,
    width: scoreCardWidth,
    borderWidth: 1,
    borderColor: theme.colors.accent,
    backgroundColor: theme.colors.lightest,
  },
  table: {
    width: scoreCardWidth,
    maxHeight: maxScoreCardHeight, // Adjust this as per your requirement
  },

  row: {
    flexDirection: 'row',
  },
  headerCellText: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  headerCell: {
    borderWidth: 1,
    borderColor: theme.colors.accent,
    paddingTop: 9,
    paddingBottom: 9,
    alignItems: 'center',
    justifyContent: 'center',
    width: scoreCardWidth / 5 - 2 / 5, // or any desired width
    backgroundColor: theme.colors.backgroundComplement,
  },
  cell: {
    borderWidth: 1,
    borderColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    width: scoreCardWidth / 5 - 2 / 5, // or any desired width
    backgroundColor: theme.colors.lightest,
  },
  input: {
    width: '100%',
    textAlign: 'center',
  },
  scoreCardCon: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  cellText: {
    color: theme.colors.primary,
  },
  // noBottomBorder: {
  //   borderBottomWidth: 0,
  // }
});
