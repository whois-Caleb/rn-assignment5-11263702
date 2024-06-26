import { StyleSheet } from "react-native";

export default settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#161622',
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  darkOption: {
    borderBottomColor: '#7b86a4',
  },
  lightOption: {
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 16,
    paddingVertical: 10,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
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
});
