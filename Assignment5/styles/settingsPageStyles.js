import { DarkTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default settingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20,
      },
      option: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      text: {
        fontSize: 16,
        paddingVertical: 10,
      },
      themeSwitchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 75,
        borderBottomColor: '#ddd',
      },
      themeText: {
        fontSize: 25,
      },
})
