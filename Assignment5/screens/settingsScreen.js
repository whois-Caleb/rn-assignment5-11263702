import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import settingsStyles from '../styles/settingsPageStyles'
import settingsPageStyles from '../styles/settingsPageStyles';

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);

  return (
    <View style={settingsPageStyles.container}>
      <TouchableOpacity style={settingsPageStyles.option}>
        <Text style={settingsPageStyles.text}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={settingsPageStyles.option}>
        <Text style={settingsPageStyles.text}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={settingsPageStyles.option}>
        <Text style={settingsPageStyles.text}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={settingsPageStyles.option}>
        <Text style={settingsPageStyles.text}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={settingsPageStyles.option}>
        <Text style={settingsPageStyles.text}>Privacy Policy</Text>
      </TouchableOpacity>

      <View style={settingsPageStyles.themeSwitchContainer}>
        <Text style={settingsPageStyles.themeText}>Theme</Text>
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

const styles = StyleSheet.create({
 
});

export default SettingsScreen;
