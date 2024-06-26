import { StyleSheet } from "react-native"

export default homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    header: {
      padding: 5,
      flex: 1,
      alignItems:'center',
      flexDirection: 'row',
      backgroundColor: '#ffffff',
    },
    profileImageContainer: {
      height: 50,
      width: 50,
      objectFit: 'contain',
      alignSelf: 'center',
    },
    welcomeMessageContainer: {
      flexDirection: 'column',
      paddingHorizontal: 20,
      alignItems: 'flex-start',
    },
    welcomeText: {
      fontSize: 20,
      color: '#787e87',
      marginLeft: 'auto',
    },
    name: {
      fontSize: 30,
    },
    searchIconContainer: {
      height: 50,
      width: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
      marginLeft: 'auto',
    },
    searchIcon: {
      color: 'black'
    },
    cardContainer:{
      flex: 1,
      paddingVertical: 20,
      objectFit: 'contain',
      alignSelf: 'center',
      justifyContent: 'center',

    },
    actionsContainer: {
      flex: 1,
      flexDirection:  'row',
      paddingVertical: 10,
      backgroundColor: '#ffffff',
      justifyContent: 'space-evenly'
    },
    actionButtonContainer:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    actionButton: {
      backgroundColor: '#f4f4f4',
      height: 60,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    actionText: {
      padding: 5,
      fontSize: 21,
    },
    transactionsContainer: {
      flexDirection: 'column',
      paddingTop: 20,
      paddingBottom: 20,

    },
    transctionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    transactionHeaderText: {
      fontSize: 26,
    },
    sellAllText: {
      fontSize: 20,
      color: '#005fff',
    },
    transaction: {
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: 'space-between',
    },
    transactionLogoContainer: {
      backgroundColor: '#f4f4f4',
      height: 50,
      width: 50,
      objectFit: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    transactionLogo: {
      height: 31,
      width: 27,
      objectFit: 'contain',
    },
    companyDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    transactionTextContainer: {
      flexDirection: 'column',
      paddingHorizontal: 20,
    },
    transactionText: {
      fontSize: 22,
    },
    transactionSubText: {
      fontSize: 15,
      color: '#f4f4f4f',
    },
    debit_creditContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    debitAmount: {
      fontSize: 22,
    },
    creditAmount: {
      fontSize: 22,
      color: '#005fff'
    }
  })