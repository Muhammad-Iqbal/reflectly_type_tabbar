import React from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Screen = ({params}) => (
  <View style={{flex:1,backgroundColor:'#161924'}}>
    <StatusBar  barStyle='light-content' />
    
    <Icon name="rocket" size={30} color="#900" />
    
  </View>
);

export default Screen;
