// SettingsScreen.js
import React, { useContext } from 'react';
import { View, Text, Switch, TouchableOpacity, StatusBar } from 'react-native';
import settingsStyles from '../styles/settingsPageStyles.js';
import { ThemeContext } from '../styles/themeContext'; // Update with correct import path

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[settingsStyles.container, isDarkTheme ? settingsStyles.darkContainer : settingsStyles.lightContainer]}>
     
        <StatusBar barStyle={isDarkTheme ? "light-content" : "dark-content"} />
        <TouchableOpacity style={[settingsStyles.option, isDarkTheme ? settingsStyles.darkOption : settingsStyles.lightOption]}>
          <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[settingsStyles.option, isDarkTheme ? settingsStyles.darkOption : settingsStyles.lightOption]}>
          <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[settingsStyles.option, isDarkTheme ? settingsStyles.darkOption : settingsStyles.lightOption]}>
          <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[settingsStyles.option, isDarkTheme ? settingsStyles.darkOption : settingsStyles.lightOption]}>
          <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[settingsStyles.option, isDarkTheme ? settingsStyles.darkOption : settingsStyles.lightOption]}>
          <Text style={[settingsStyles.text, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Privacy Policy</Text>
        </TouchableOpacity>
  
        <View style={settingsStyles.themeSwitchContainer}>
          <Text style={[settingsStyles.themeText, isDarkTheme ? settingsStyles.darkText : settingsStyles.lightText]}>Theme</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#05e15e" }}
        thumbColor={isDarkTheme ? "white" : "#f4f3f4"}
        onValueChange={toggleTheme}
        value={isDarkTheme}
      />
      </View>
    </View>
  );
};

export default SettingsScreen;
