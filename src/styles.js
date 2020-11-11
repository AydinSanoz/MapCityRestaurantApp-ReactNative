import {Dimensions, StyleSheet} from 'react-native';

export const searchBarStyles = StyleSheet.create({
    container : {
        padding: 10,
        borderRadius:10,
        backgroundColor : 'gray',
        width : Dimensions.get('window').width *0.80,
        margin : 10,
        alignSelf : 'center'
    },
    input:{
       color : 'white',
    }
})

export const cityStyles = StyleSheet.create({
    container:{
        backgroundColor : '#efe1cc',
        margin: 5,
        padding : 10,
        alignSelf : 'center',
        borderRadius : 10,

    }
})

export const detailStyle = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    line: {
      borderWidth: 1,
      width: Dimensions.get("window").width / 4,
      alignSelf: 'center',
      borderColor: '#e0e0e0',
      marginVertical: 2
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#424242',
    },
    address: {
      fontSize: 12,
    },
    phone: {
      fontWeight: 'bold',
      marginLeft: 5
    },
  });