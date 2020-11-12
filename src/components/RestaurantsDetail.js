import React from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';
import {restaurantDetailStyles} from '../styles';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const RestaurantDetail = (props) => {
  console.log('RestaurantDetail -> props', props);

  function price(length){
    let price = []
      for(i=0;i<length; i++){
          price.push('⭐')
      }
      return price
  }
  return (
      
    <Modal
      isVisible={props.isVisible}
      onBackdropPress = {props.onClose}
      swipeDirection="down"
      onSwipeComplete={props.onClose}
      style={{justifyContent: 'flex-end'}}
    >
      <View style={restaurantDetailStyles.container}>
        <View style={restaurantDetailStyles.line} />
        <View style={restaurantDetailStyles.line} />
        <View style={restaurantDetailStyles.line} />

        <Image
          source={{uri: props.selectedRestaurant.image_url}}
          style={restaurantDetailStyles.img}
        />
        <Text style={restaurantDetailStyles.name}>
          {props.selectedRestaurant.name}
        </Text>
        <Text style={restaurantDetailStyles.location}>
          {props.selectedRestaurant.area} / {props.selectedRestaurant.city}
        </Text>
        <View style = {{flexDirection :'row', justifyContent : 'space-between'}}>
          <Text style = {restaurantDetailStyles.phone}>☎ {props.selectedRestaurant.phone}</Text>
          <Text style = {restaurantDetailStyles.price}>{price(props.selectedRestaurant.price)}</Text>
        </View>
        <Text style = {restaurantDetailStyles.desc}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
      </View>
    </Modal>
  );
};

selectedRestaurant: address: '3920 Pulaski Highway';
area: 'Baltimore / Maryland';
city: 'Abingdon';
country: 'US';
id: 91729;
image_url: 'https://www.opentable.com/img/restimages/91729.jpg';
lat: 39.460394;
lng: -76.256016;
mobile_reserve_url: 'http://mobile.opentable.com/opentable/?restId=91729';
name: 'Primavera Italian Restaurant & Bar';
phone: '4106122740';
postal_code: '21009';
price: 2;
reserve_url: 'http://www.opentable.com/single.aspx?rid=91729';
state: 'MD';
