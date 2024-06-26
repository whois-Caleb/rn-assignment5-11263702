import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import settingsStyles from '../styles/settingsPageStyles.js';

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSwitch = () => {
    setIsDarkTheme(previousState => !previousState);
  };

  return (
    <View style={[settingsStyles.container, isDarkTheme ? settingsStyles.darkContainer : settingsStyles.lightContainer]}>
      <StatusBar barStyle={isDarkTheme ? "light-content" : "dark-content"} />
      <TouchableOpacity style={settingsStyles.option}>
        <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={settingsStyles.option}>
        <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={settingsStyles.option}>
        <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={settingsStyles.option}>
        <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={settingsStyles.option}>
        <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Privacy Policy</Text>
      </TouchableOpacity>

      <View style={settingsStyles.themeSwitchContainer}>
        <Text style={[settingsStyles.themeText, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#05e15e" }}
          thumbColor={isDarkTheme ? "white" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
