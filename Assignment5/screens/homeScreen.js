import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import homeStyles from '../styles/homePageStyles'
import homePageStyles from '../styles/homePageStyles';

function HomeScreen() {
  return (
    <ScrollView style={homeStyles.container}>
        
      
        <View style={homeStyles.header}>
            <View style={homeStyles.profileImageContainer}>
                <Image source={require('../assets/profile.png')}/>
            </View>
        
            <View style={homeStyles.welcomeMessageContainer}>
                <Text style={homeStyles.welcomeText}>Welcome back,</Text>
                <Text style={homeStyles.name}>Eric Atsu</Text>
            </View>
        
            <View style={homeStyles.searchIconContainer}>
                <Ionicons name='search-outline' size={30} style={homeStyles.searchIcon}/>
            </View>
      
        </View>

        <View style={homeStyles.cardContainer}>
            <Image source={require('../assets/Card.png')}/>
        </View>

        <View style={homeStyles.actionsContainer}>
            <TouchableOpacity style={homeStyles.actionButtonContainer}>
                <View style={homeStyles.actionButton}>
                    <Ionicons name='arrow-up' size={30}/>
                </View>
                <View style={homeStyles.actionText}>
                    <Text>Sent</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.actionButtonContainer}>
                <View style={homeStyles.actionButton}>
                    <Ionicons name='arrow-down' size={30}/>
                </View>
                <View style={homeStyles.actionText}>
                    <Text>Receive</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.actionButtonContainer}>
                <View style={homeStyles.actionButton}>
                    <Image source={require('../assets/loan.png')}/>
                </View>
                <View style={homeStyles.actionText}>
                    <Text>Loan</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.actionButtonContainer}>
                <View style={homeStyles.actionButton}>
                    <Ionicons name='cloud-upload-outline' size={30}/>
                </View>
                <View style={homeStyles.actionText}>
                    <Text>Topup</Text>
                </View>
            </TouchableOpacity>

        </View>

        <View style={homeStyles.transactionsContainer}>
            <View style={homeStyles.transctionHeader}>
                <Text style={homeStyles.transactionHeaderText}>Transaction</Text>
                <Text style={homeStyles.sellAllText}>Sell All</Text>
            </View>
            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={homeStyles.transactionLogoContainer}>
                        <Image source={require('../assets/apple.png')} style={homePageStyles.transactionLogo}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={homeStyles.transactionText}>Apple Store</Text>
                        <Text style={homeStyles.transactionSubText}>Entertainment</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                        <Text style={homeStyles.debitAmount}>-$5,99</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={homeStyles.transactionLogoContainer}>
                        <Image source={require('../assets/spotify.png')}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={homeStyles.transactionText}>Spotify</Text>
                        <Text style={homeStyles.transactionSubText}>Music</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                        <Text style={homeStyles.debitAmount}>-$12,99</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={homeStyles.transactionLogoContainer}>
                        <Image source={require('../assets/moneyTransfer.png')}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={homeStyles.transactionText}>Money Transfer</Text>
                        <Text style={homeStyles.transactionSubText}>Transaction</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                        <Text style={homeStyles.creditAmount}>$300</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={homeStyles.transactionLogoContainer}>
                        <Image source={require('../assets/grocery.png')}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={homeStyles.transactionText}>Grocery</Text>
                        <Text style={homeStyles.transactionSubText}>Food</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                        <Text style={homeStyles.debitAmount}>-$88</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={homeStyles.transactionLogoContainer}>
                        <Image source={require('../assets/netflix.png')} style={homePageStyles.transactionLogo}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={homeStyles.transactionText}>Netflix</Text>
                        <Text style={homeStyles.transactionSubText}>Entertainment</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                        <Text style={homeStyles.debitAmount}>-$29,99</Text>
                </View>
            </View>

            <View style={homeStyles.transaction}>
                <View style={homeStyles.companyDetails}>
                    <View style={homeStyles.transactionLogoContainer}>
                        <Image source={require('../assets/mtn.png')} style={homePageStyles.transactionLogo}/>
                    </View>

                    <View style={homeStyles.transactionTextContainer}>
                        <Text style={homeStyles.transactionText}>MTN</Text>
                        <Text style={homeStyles.transactionSubText}>Data Plan</Text>
                    </View>
                </View>

                <View style={homeStyles.debit_creditContainer}>
                        <Text style={homeStyles.debitAmount}>-$25,99</Text>
                </View>
            </View>
        </View>

       

    
    </ScrollView>
  );
}

export default HomeScreen;
