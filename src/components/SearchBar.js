import React from 'react';
import { View, TextInput } from 'react-native';
import {searchBarStyles} from '../styles'

export const SearchBar = (props) => {
    return(
        <View style = {searchBarStyles.container}>
            <TextInput
                placeholder= {props.title}
                placeholderTextColor = {props.color}

            />
        </View>
    )
}