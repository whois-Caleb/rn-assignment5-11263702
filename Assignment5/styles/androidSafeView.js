import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "#f7f0e8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});