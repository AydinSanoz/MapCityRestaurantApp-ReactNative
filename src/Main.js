import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {RestaurantsDetail, SearchBar, City} from './components';
import MapView, {Marker} from 'react-native-maps';
import Axios from 'axios';

let originalList = [];
const Main = () => {
  const mapRef = useRef(null);
  const [cityList, setCityList] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [modalFlag, setModalFlag] = useState(false);

  const fetchData = async () => {
    const {data} = await Axios.get(
      'https://opentable.herokuapp.com/api/cities',
    );
    originalList = [...data.cities];
    setCityList(data.cities);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderCities = ({item}) => {
    return <City city={item} onPress={() => onCitySelect(item)} />;
  };

  const filterCities = (text) => {
    const filteredCities = originalList.filter((city) => {
      const inputVal = text.toLowerCase();
      const cityVal = city.toLowerCase();
      return cityVal.indexOf(inputVal) > -1;
    });
    setCityList(filteredCities);
  };

  const onCitySelect = async (city) => {
    const {
      data: {restaurants},
    } = await Axios.get(
      'https://opentable.herokuapp.com/api/restaurants?city=' + city,
    );
    setRestaurants(restaurants);
    console.log('Main -> restaurants', restaurants);

    const restaurantsCoordinates = restaurants.map((res) => {
      return {
        latitude: res.lat,
        longitude: res.lng,
      };
    });
    mapRef.current.fitToCoordinates(restaurantsCoordinates, {
      edgePadding: {
        top: 50,
        right: 25,
        bottom: 25,
        left: 25,
      },
    });
  };

  const onRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalFlag(true);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {restaurants.map((r, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: r.lat,
                longitude: r.lng,
              }}
              onPress={() => onRestaurantSelect(r)}
            />
          ))}
        </MapView>
        <View style={{position: 'absolute'}}>
          <SearchBar title="Enter a city" color="white" onText={filterCities} />
          <FlatList
            horizontal
            keyExtractor={(_, index) => index.toString()}
            data={cityList}
            renderItem={renderCities}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;

address: '1482 Old York Road';
area: 'Philadelphia / New Jersey Suburbs';
city: 'Abington';
country: 'US';
id: 25267;
image_url: 'https://www.opentable.com/img/restimages/25267.jpg';
lat: 40.124851;
lng: -75.117586;
mobile_reserve_url: 'http://mobile.opentable.com/opentable/?restId=25267';
name: 'Kitchen Bar';
phone: '2155769766';
postal_code: '19001';
price: 2;
reserve_url: 'http://www.opentable.com/single.aspx?rid=25267';
state: 'PA';
