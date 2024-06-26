import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen';
import SettingsScreen from './screens/settingsScreen';
import CardsScreen from './screens/cardsScreen';
import StatisticsScreen from './screens/statisticsScreen';
import { ThemeProvider } from './styles/themeContext';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
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
