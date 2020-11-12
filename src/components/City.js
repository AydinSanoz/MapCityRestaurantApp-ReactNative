import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {cityStyles} from '../styles';

export const City = (props) => {
  console.log('City -> props', props.city);
  return (
    <TouchableOpacity style={cityStyles.container} onPress={props.onPress}>
      
        <Text style={cityStyles.text}>🏡</Text>
        <Text style={cityStyles.text}>{props.city}</Text>
     
    </TouchableOpacity>
  );
};
