import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

import PlayerButton from './components/PlayerButton';
import NewPlayerModal from './components/NewPlayerModal';
import NewScoreModal from './components/NewScoreModal';
import PlayerList from './components/PlayerList';
import ScoreCard from './components/ScoreCard';
import EditPlayerModal from './components/EditPlayerModal';

export default function App() {
  const [editPlayerModalVisible, setEditPlayerModalVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [scoreModalVisible, setScoreModalVisible] = useState(false);
  const [newPlayer, setNewPlayer] = useState('');
  const [playerList, setPlayerList] = useState([]);
  const [scoreTotalArray, setScoreTotalArray] = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [holeIndex, setHoleIndex] = useState(0);
  const [newScore, setNewScore] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState(0);
  return (
    <View style={styles.container}>
      <PlayerList
        playerList={playerList}
        scoreTotalArray={scoreTotalArray}
        editPlayerModalVisible={editPlayerModalVisible}
        setEditPlayerModalVisible={setEditPlayerModalVisible}
        setSelectedPlayer={setSelectedPlayer}
      />
      <PlayerButton
        setModalVisible={setModalVisible}
        newPlayer={newPlayer}
        setNewPlayer={setNewPlayer}
        playerList={playerList}
        setPlayerList={setPlayerList}
        scoreTotalArray={scoreTotalArray}
        setScoreTotalArray={setScoreTotalArray}></PlayerButton>
      <View>
        <ScoreCard
          playerList={playerList}
          setPlayerIndex={setPlayerIndex}
          setHoleIndex={setHoleIndex}
          scoreModalVisible={scoreModalVisible}
          setScoreModalVisible={setScoreModalVisible}
          scoreTotalArray={scoreTotalArray}
          
          editPlayerModalVisible={editPlayerModalVisible}
          setEditPlayerModalVisible={setEditPlayerModalVisible}
          setSelectedPlayer={setSelectedPlayer}></ScoreCard>
      </View>
      <NewScoreModal
        scoreModalVisible={scoreModalVisible}
        setScoreModalVisible={setScoreModalVisible}
        newScore={newScore}
        setNewScore={setNewScore}
        scoreTotalArray={scoreTotalArray}
        setScoreTotalArray={setScoreTotalArray}
        playerIndex={playerIndex}
        holeIndex={holeIndex}
        setHoleIndex={setHoleIndex}
        playerList={playerList}
        setPlayerIndex={setPlayerIndex}></NewScoreModal>
      <NewPlayerModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newPlayer={newPlayer}
        setNewPlayer={setNewPlayer}
        playerList={playerList}
        setPlayerList={setPlayerList}
        scoreTotalArray={scoreTotalArray}
        setScoreTotalArray={setScoreTotalArray}></NewPlayerModal>
      <EditPlayerModal
        selectedPlayer={selectedPlayer}
        editPlayerModalVisible={editPlayerModalVisible}
        setEditPlayerModalVisible={setEditPlayerModalVisible}
        newPlayer={newPlayer}
        setNewPlayer={setNewPlayer}
        playerList={playerList}
        setPlayerList={setPlayerList}
        scoreTotalArray={scoreTotalArray}
        setScoreTotalArray={setScoreTotalArray}>
        </EditPlayerModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: 'center',
    paddingTop: '3%',
    // paddingTop: 10,
    backgroundColor: '#004C46',
    // backgroundColor: '#70b078'
    // padding: 20,
    // width: '100%'
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
