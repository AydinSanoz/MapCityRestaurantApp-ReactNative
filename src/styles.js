import {Dimensions, StyleSheet} from 'react-native';

export const searchBarStyles = StyleSheet.create({
    container : {
        padding: 10,
        borderRadius:10,
        backgroundColor : '#d3b8ae',
        width : Dimensions.get('window').width *0.80,
        margin : 10,
        alignSelf : 'center'
    },
    input:{
       //null,
    }
})

export const cityStyles = StyleSheet.create({
    container:{
        backgroundColor : '#d3b8ae',
        margin: 5,
        padding : 10,
        alignSelf : 'center',
        borderRadius : 10,
        flexDirection :'row',
    },
    text:{
        marginLeft:3,
        
    }
    
})

export const restaurantDetailStyles = StyleSheet.create({
    container: {
      backgroundColor: '#d3b8ae',
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      
    },
    img:{
        
        height : Dimensions.get('window').height * 0.20,
        resizeMode :'cover',
        margin : 10
    },
    line: {
      borderWidth: 1,
      width: Dimensions.get("window").width / 4,
      alignSelf: 'center',
      borderColor: '#e0e0e0',
      marginVertical: 2,
     
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#424242',
     
    },
    location: {
      fontSize: 15,
      marginBottom : 4
     
    },
    phone: {
      fontWeight: 'bold',
      fontSize : 15
      
     
    },
    price:{
        fontSize: 15,
    },
    desc:{
        marginTop : 10,
        textAlign :'justify',
        
        
       
    }
  });