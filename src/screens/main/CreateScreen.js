import { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const finishedPhoto = await camera.takePictureAsync();
    // const location = await Location.getCurrentPositionAsync();
    setPhoto(finishedPhoto.uri);
  };

  const sendPhoto = async () => {
    navigation.navigate("DefaultScreen", { photo });
  };

  return (
    <View style={classes.container}>
      <Camera style={classes.camera} ref={setCamera}>
        {photo && (
          <View style={classes.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 200, width: 200 }}
            />
          </View>
        )}
        <TouchableOpacity style={classes.snapContainer} onPress={takePhoto}>
          <Text style={classes.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity style={classes.sendButton} onPress={sendPhoto}>
          <Text style={classes.sendLabel}>POST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const classes = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    // flex: 1, // full screen
    height: "70%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  snapContainer: {
    borderWidth: 1,
    borderColor: "#008080",
    marginBottom: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  snap: {
    color: "#fff",
  },

  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "#fff",
    borderWidth: 1,
  },

  sendButton: {
    marginTop: 20,
    marginHorizontal: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#008080",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  sendLabel: {
    color: "#008080",
    fontWeight: 600,
  },
});

export default CreateScreen;
