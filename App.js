import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  JournalScreen,
  MeasureScreen,
  TreatmentScreen,
  ProfileScreen,
} from './src/containers/index';

import AddButton from './src/components/addButton'

const Tab = createBottomTabNavigator();

const add = () =>{
  return null
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Journal') {
                iconName = 'book-medical'
              } else if (route.name === 'Measure') {
                iconName = 'heartbeat';
              }else if (route.name === 'Treatment') {
                iconName = 'band-aid';
              }
              else if (route.name === 'Profile') {
                iconName = 'user';
              }else if(route.name === 'Add'){
                return <AddButton />
              }

              // You can return any component that you like here!
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#CDCCCE',
            inactiveTintColor: 'gray',
            showLabel:false
          }}>
        <Tab.Screen
          name="Journal"
          component={JournalScreen}
          
        />
        <Tab.Screen
          name="Measure"
          component={MeasureScreen}
  
        />
        <Tab.Screen name="Add" component={TreatmentScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AddButton />
          ),
        }}/>
        <Tab.Screen name="Treatment" component={TreatmentScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
