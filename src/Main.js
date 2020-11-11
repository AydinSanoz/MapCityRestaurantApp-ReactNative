import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { RestaurantsDetail, SearchBar, City } from './components';



const Main = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Main Page</Text>
                <SearchBar 
                    title = 'Enter a city'
                />
                <City/>
                <RestaurantsDetail/>
            </View>
        </SafeAreaView>
    )
}

export default Main ;