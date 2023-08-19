import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import theme from '../assets/theme'; 

export default function IntroScreen({setScreenState}) {
  return (
    <TouchableOpacity
        activeOpacity={.8}
      style={[styles.centeredView, styles.fullScreen, styles.introBody]}
      onPress={() => setScreenState(1)}>
      <Text style={[styles.welcomeText]}>Welcome</Text>
      <Text style={[styles.enterText]}>Click to Enter</Text>
      <Image style={[styles.image]} source={require('../assets/dunes2.png')} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  introBody: {
    backgroundColor: theme.colors.background,
    position: 'absolute',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreen: {
    width: '100%',
    height: '102%',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  enterText: {
    fontSize: 15,
    marginTop: 13,
    color: theme.colors.primary
  },
  image: {
    width: '100%',
    // heigh:'50%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0
  }
});
