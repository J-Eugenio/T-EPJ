import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Main from './src/app';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor="white" />
      <Main />
    </View>
  );
};

export default App;
