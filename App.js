import React, { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Button,
  ImageBackground,
  Text,
} from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/background.jpg")}
      >
        <TextInput style={styles.input} textAlign={'center'} />
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container} onLayout={onLayoutRootView}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                placeholder="Username"
                value={name}
                onChangeText={nameHandler}
              />

              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={passwordHandler}
              />

              <Button style={styles.input} title={"Login"} onPress={onLogin} />
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  input: {
    // width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
    // marginBottom: 10,
    marginHorizontal: 30,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
});
