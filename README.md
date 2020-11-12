## ScreenShot of CityMapRestaurants

|ProjectName : CityMapRestaurants|
|---|
| React-Native-Map - OpenTable Api - React-Native-Modals |
||
|<img src = './ScreenShots/mapCityRestaurant.gif'>|

### MapView and Marker Usage
```bash
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

```
### Sample Search Bar
```bash
const filterCities = (text) => {
    const filteredCities = originalList.filter((city) => {
      const inputVal = text.toLowerCase();
      const cityVal = city.toLowerCase();
      return cityVal.indexOf(inputVal) > -1;
    });
    setCityList(filteredCities);
  };
```

### Sample Modal Usage
```vscode
<Modal
      isVisible={props.isVisible}
      onBackdropPress = {props.onClose}
      swipeDirection="down"
      onSwipeComplete={props.onClose}
      style={{justifyContent: 'flex-end'}}
    >
</Modal>    

```
