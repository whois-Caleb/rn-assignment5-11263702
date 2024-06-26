import { StyleSheet } from "react-native"

export default homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    lightContainer: {
      backgroundColor: '#ffffff',
    },
    darkContainer: {
      backgroundColor: '#161622',
    },
    header: {
      padding: 5,
      flex: 1,
      alignItems:'center',
      flexDirection: 'row',
    },
    lightHeader: {
      backgroundColor: '#ffffff',
    },
    darkHeader: {
    backgroundColor: '#161622',
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
      marginLeft: 'auto',
    },
    lightWelcomeText: {
      color: '#ffffff',
    },
    darkWelcomeText: {
      color: '#787e87',
    },
    name: {
      fontSize: 30,
    },
    darkName: {
      color: '#ffffff'
    },
    lightName: {
      color: '#000000'
    },
    searchIconContainer: {
      height: 50,
      width: 50,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
    },
    lightSearchContainer: {
      backgroundColor: '#f4f4f4',
    },
    darkSearchContainer: {
      backgroundColor: '#1c1c2a',
    },
    searchIcon: {
    },
    lightSearchIcon:{
       color: '#000000'
    },
    darkSearchIcon:{
      color: '#ffffff'
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
      justifyContent: 'space-evenly'
    },
    lightActionsContainer: {
      backgroundColor: '#ffffff',
    },
    darkActionsContainer: {
      backgroundColor: '#161622',
    },
    actionButtonContainer:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    actionButton: {
      height: 60,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,
    },
    lightActionButton: {
      backgroundColor: '#f4f4f4',
    },
    darkActionButton: {
      backgroundColor: '#212132',
    },
    actionIcon: {

    },
    darkActionIcon: {
      color: '#ffffff'
    },
    lightActionIcon: {
      color: '#000000'
    },
    actionText: {
      padding: 2,
      fontSize: 15,
    },
    lightActionText: {
      color: '#000000'
    },
    darkActionText: {
      color: '#c0c3c1'
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
    darkTransactionHeaderText: {
      color: '#ffffff',
    },
    lightTransactionHeaderText: {
      color: '#000000',
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
      height: 50,
      width: 50,
      objectFit: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    lightTransactionLogoContainer: {
      backgroundColor: '#f4f4f4',
    },
    darkTransactionLogoContainer: {
      backgroundColor: '#212132',
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
    lightTransactionText: {
      color: '#000000'
    },
    darkTransactionText: {
      color: '#ffffff'
    },
    transactionSubText: {
      fontSize: 15,
    },
    lightTransactionSubText: {
      color: '#f4f4f4f'
    },
    darkTransactionSubText: {
      color: '#c0c3c1'
    },
    debit_creditContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    debitAmount: {
      fontSize: 22,
    },
    lightDebitAmount: {
      color: '#000000'
    },
    darkDebitAmount: {
      color: '#ffffff'
    },
    creditAmount: {
      fontSize: 22,
      color: '#005fff'
    }
  })