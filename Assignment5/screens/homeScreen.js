import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, useState } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import homeStyles from '../styles/homePageStyles'
import { ThemeContext } from '../styles/themeContext';

const HomeScreen = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ScrollView style={[homeStyles.container, isDarkTheme ? homeStyles.darkContainer : homeStyles.lightContainer]}>
        
      
        <View style={[homeStyles.header, isDarkTheme ? homeStyles.darkHeader : homeStyles.lightHeader]}>
            <View style={homeStyles.profileImageContainer}>
                <Image source={require('../assets/profile.png')}/>
            </View>
        
            <View style={homeStyles.welcomeMessageContainer}>
                <Text style={[homeStyles.welcomeText, isDarkTheme ? homeStyles.darkWelcomeText : homeStyles.lightWelcomeText]}>Welcome back,</Text>
                <Text style={homeStyles.name}>Eric Atsu</Text>
            </View>
        
            <View style={[homeStyles.searchIconContainer, isDarkTheme ? homeStyles.darkSearchContainer : homeStyles.lightSearchContainer]}>
                <Ionicons name='search-outline' size={30} style={[homeStyles.searchIcon, isDarkTheme ? homeStyles.darkSearchIcon : homeStyles.lightSearchIcon]}/>
            </View>
      
        </View>

        <View style={homeStyles.cardContainer}>
            <Image source={require('../assets/Card.png')}/>
        </View>

        <View style={homeStyles.actionsContainer}>
            <TouchableOpacity style={homeStyles.actionButtonContainer}>
                <View style={[homeStyles.actionButton, isDarkTheme ? homeStyles.darkActionButton : homeStyles.lightActionButton]}>
                    <Ionicons name='arrow-up' size={30} style={[homeStyles.actionIcon, isDarkTheme ? homeStyles.darkActionIcon : homeStyles.lightActionIcon]}/>
                </View>
                <View style={homeStyles.actionText}>
                    <Text style={[homeStyles.actionText, isDarkTheme ? homeStyles.darkActionText : homeStyles.lightActionText]}>Sent</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.actionButtonContainer}>
                <View style={[homeStyles.actionButton, isDarkTheme ? homeStyles.darkActionButton : homeStyles.lightActionButton]}>
                    <Ionicons name='arrow-down' size={30} style={[homeStyles.actionIcon, isDarkTheme ? homeStyles.darkActionIcon : homeStyles.lightActionIcon]}/>
                </View>
                <View style={homeStyles.actionText}>
                    <Text style={[homeStyles.actionText, isDarkTheme ? homeStyles.darkActionText : homeStyles.lightActionText]}>Receive</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.actionButtonContainer}>
                <View style={[homeStyles.actionButton, isDarkTheme ? homeStyles.darkActionButton : homeStyles.lightActionButton]}>
                    <Ionicons name = 'cash-outline' size={30} style={[homeStyles.actionIcon, isDarkTheme ? homeStyles.darkActionIcon : homeStyles.lightActionIcon]}/>
                </View>
                <View style={homeStyles.actionText}>
                    <Text style={[homeStyles.actionText, isDarkTheme ? homeStyles.darkActionText : homeStyles.lightActionText]}>Loan</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.actionButtonContainer}>
                <View style={[homeStyles.actionButton, isDarkTheme ? homeStyles.darkActionButton : homeStyles.lightActionButton]}>
                    <Ionicons name='cloud-upload-outline' size={30} style={[homeStyles.actionIcon, isDarkTheme ? homeStyles.darkActionIcon : homeStyles.lightActionIcon]}/>
                </View>
                <View>
                    <Text style={[homeStyles.actionText, isDarkTheme ? homeStyles.darkActionText : homeStyles.lightActionText]}>Topup</Text>
                </View>
            </TouchableOpacity>

        </View>

        <View style={homeStyles.transactionsContainer}>
            <View style={homeStyles.transctionHeader}>
                <Text style={[homeStyles.transactionHeaderText, isDarkTheme ? homeStyles.darkTransactionHeaderText : homeStyles.lightTransactionHeaderText]}>Transaction</Text>
                <Text style={homeStyles.sellAllText}>Sell All</Text>
            </View>
            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={[homeStyles.transactionLogoContainer, isDarkTheme ? homeStyles.darkTransactionLogoContainer : homeStyles.lightTransactionLogoContainer]}>
                        <Image source={ isDarkTheme ? require('../assets/darkApple.png') : require('../assets/apple.png')}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={[homeStyles.transactionText, isDarkTheme ? homeStyles.darkTransactionText : homeStyles.lightTransactionText]}>Apple Store</Text>
                        <Text style={[homeStyles.transactionSubText, isDarkTheme ? homeStyles.darkTransactionSubText : homeStyles.lightTransactionSubText]}>Entertainment</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                    <Text style={[homeStyles.debitAmount, isDarkTheme ? homeStyles.darkDebitAmount : homeStyles.lightDebitAmount]}>-$5,99</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={[homeStyles.transactionLogoContainer, isDarkTheme ? homeStyles.darkTransactionLogoContainer : homeStyles.lightTransactionLogoContainer]}>
                        <Image source={require('../assets/spotify.png')}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={[homeStyles.transactionText, isDarkTheme ? homeStyles.darkTransactionText : homeStyles.lightTransactionText]}>Spotify</Text>
                        <Text style={[homeStyles.transactionSubText, isDarkTheme ? homeStyles.darkTransactionSubText : homeStyles.lightTransactionSubText]}>Music</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                    <Text style={[homeStyles.debitAmount, isDarkTheme ? homeStyles.darkDebitAmount : homeStyles.lightDebitAmount]}>-$12,99</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={[homeStyles.transactionLogoContainer, isDarkTheme ? homeStyles.darkTransactionLogoContainer : homeStyles.lightTransactionLogoContainer]}>
                        <Image source={ isDarkTheme ? require('../assets/darkTransfer.png') : require('../assets/moneyTransfer.png')} style={homeStyles.transactionImage}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={[homeStyles.transactionText, isDarkTheme ? homeStyles.darkTransactionText : homeStyles.lightTransactionText]}>Money Transfer</Text>
                        <Text style={[homeStyles.transactionSubText, isDarkTheme ? homeStyles.darkTransactionSubText : homeStyles.lightTransactionSubText]}>Transaction</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                        <Text style={homeStyles.creditAmount}>$300</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={[homeStyles.transactionLogoContainer, isDarkTheme ? homeStyles.darkTransactionLogoContainer : homeStyles.lightTransactionLogoContainer]}>
                        <Image source={require('../assets/grocery.png')}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={[homeStyles.transactionText, isDarkTheme ? homeStyles.darkTransactionText : homeStyles.lightTransactionText]}>Grocery</Text>
                        <Text style={[homeStyles.transactionSubText, isDarkTheme ? homeStyles.darkTransactionSubText : homeStyles.lightTransactionSubText]}>Food</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                    <Text style={[homeStyles.debitAmount, isDarkTheme ? homeStyles.darkDebitAmount : homeStyles.lightDebitAmount]}>-$88</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={[homeStyles.transactionLogoContainer, isDarkTheme ? homeStyles.darkTransactionLogoContainer : homeStyles.lightTransactionLogoContainer]}>
                        <Image source={require('../assets/netflix.png')} style={homeStyles.transactionLogo}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={[homeStyles.transactionText, isDarkTheme ? homeStyles.darkTransactionText : homeStyles.lightTransactionText]}>Netflix</Text>
                        <Text style={[homeStyles.transactionSubText, isDarkTheme ? homeStyles.darkTransactionSubText : homeStyles.lightTransactionSubText]}>Entertainment</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                    <Text style={[homeStyles.debitAmount, isDarkTheme ? homeStyles.darkDebitAmount : homeStyles.lightDebitAmount]}>-$29,99</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={[homeStyles.transactionLogoContainer, isDarkTheme ? homeStyles.darkTransactionLogoContainer : homeStyles.lightTransactionLogoContainer]}>
                        <Image source={require('../assets/mtn.png')} style={homeStyles.transactionLogo}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={[homeStyles.transactionText, isDarkTheme ? homeStyles.darkTransactionText : homeStyles.lightTransactionText]}>MTN</Text>
                        <Text style={[homeStyles.transactionSubText, isDarkTheme ? homeStyles.darkTransactionSubText : homeStyles.lightTransactionSubText]}>Data Plan</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                        <Text style={[homeStyles.debitAmount, isDarkTheme ? homeStyles.darkDebitAmount : homeStyles.lightDebitAmount]}>-$25,99</Text>
                </View>
            </View>
        </View>

       

    
    </ScrollView>
  );
};

export default HomeScreen;
