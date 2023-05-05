import { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";

const windowDimensions = Dimensions.get("window").width - 20 * 2;
const screenDimensions = Dimensions.get("screen").height - 20 * 2;

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window: window.width, screen: screen.height });
      }
    );
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

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../../assets/images/background.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 30 : 100,
                width: dimensions.window - 20 * 2,
                // height: dimensions.screen - 20 * 2,
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
                <Text style={styles.buttonTitle}>Log in</Text>
              </TouchableOpacity>

              <TouchableHighlight
                activeOpacity={0.5}
                underlayColor={{ color: "#8fbc8f" }}
                style={styles.textLink}
                onPress={() => navigation.navigate("Register")}
              >
                <Text>
                  New to the application?{" "}
                  <Text style={styles.textLinkText}>Sign up</Text>
                </Text>
              </TouchableHighlight>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

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

  form: { marginBottom: 70 },

  inputTitle: {
    marginBottom: 8,
    textTransform: "uppercase",
    // fontFamily: "Roboto-Regular",
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

  textLink: {
    marginTop: 20,
    alignItems: "center",
  },

  textLinkText: {
    color: "#708090",
    padding: 10,
    fontSize: 16,
    fontWeight: "700",
  },

  header: {
    alignItems: "center",
    marginBottom: 50,
  },

  headerTitle: {
    fontSize: 18,
    // fontFamily: "Roboto-Regular",
  },
});

export default LoginScreen;
