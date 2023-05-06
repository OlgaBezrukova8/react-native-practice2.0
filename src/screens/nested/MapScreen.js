import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={classes.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.516339,
          longitude: 30.602185,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ latitude: 50.516339, longitude: 30.602185 }}
          title="Shopping mall"
        />
      </MapView>
    </View>
  );
};

const classes = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
