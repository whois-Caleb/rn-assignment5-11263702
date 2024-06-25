import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import safeViewAndroid from './styles/androidSafeView';
import homeStyles from './styles/homePage';
import parentScrollComponentStyles from './styles/parentScrollViewStylesheet';

export default function App() {
  return (
    <SafeAreaView style={safeViewAndroid.androidSafeArea}>
    <View style={homeStyles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      
    </View>
    </SafeAreaView>
  );
};
