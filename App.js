import React, { useState, useCallback, useEffect } from "react";
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
  TouchableOpacity,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";

SplashScreen.preventAutoHideAsync();
const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
    // window: windowDimensions.width - 20 * 2,
    // screen: screenDimensions,

    // TODO: add conditiont to landscape screen
  );

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width;
  //     console.log(width);
  //   };
  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    console.log(dimensions);
    return () => subscription?.remove();
  });

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setEmail("");
    setPassword("");
  };

  const emailHandler = (value) => setEmail(value);
  const passwordHandler = (value) => setPassword(value);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("./assets/images/background.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 30 : 100,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello guys :)</Text>
                <Text style={styles.headerTitle}>
                  Welcome to the application!
                </Text>
              </View>

              <View>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={emailHandler}
                  value={email}
                />
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={passwordHandler}
                  value={password}
                />
              </View>

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={keyboardHide}
              >
                <Text style={styles.buttonTitle}>Log in </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {  marginBottom: 70 },

  inputTitle: {
    marginBottom: 8,
    textTransform: "uppercase",
    fontFamily: "Roboto-Regular",
  },

  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#8fbc8f",
    borderRadius: 8,
  },

  button: {
    marginTop: 30,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    ...Platform.select({
      ios: { backgroundColor: "#8fbc8f" },
      android: { backgroundColor: "transparent" },
    }), // for different platforms - different color
  },

  buttonTitle: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 16,

    ...Platform.select({
      ios: { color: "#ffffff" },
      android: { color: "#000000" },
    }),
  },

  header: {
    alignItems: "center",
    marginBottom: 50,
  },

  headerTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
});
