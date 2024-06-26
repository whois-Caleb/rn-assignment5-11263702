// App.js
import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/homeScreen';
import SettingsScreen from './screens/settingsScreen';
import CardsScreen from './screens/cardsScreen';
import StatisticsScreen from './screens/statisticsScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    // <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === 'Home') {
    //       iconName = focused ? 'home' : 'home-outline';
    //     } else if (route.name === 'My Cards') {
    //       iconName = focused ? 'card' : 'card-outline';
    //     } else if (route.name === 'Statistics') {
    //       iconName = focused ? 'stats-chart' : 'stats-chart-outline';
    //     } else if (route.name === 'Settings') {
    //       iconName = focused ? 'settings' : 'settings-outline';
    //     }

    //     return <Ionicons name={iconName} size={20} color={color} />;
    //   },
    // })}
    // tabBarOptions={{
    //   activeTintColor: 'blue',
    //   inactiveTintColor: 'gray',
    // }}
    // >
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
       options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('./assets/tab icons/home_active.png') : require('./assets/tab icons/home_inactive.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }}
      />
      
      <Tab.Screen name="My Cards" component={CardsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('./assets/tab icons/myCards_active.png') : require('./assets/tab icons/myCards_inactive.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }}
     />

      <Tab.Screen name="Statistics" component={StatisticsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('./assets/tab icons/statistics_active.png') : require('./assets/tab icons/statistics_inactive.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }}
      />

      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('./assets/tab icons/settings_active.png') : require('./assets/tab icons/settings_inactive.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }}
      />
    
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
