/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import RootNav from './src/navigation/RootNav';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
