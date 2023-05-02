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
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";

const windowDimensions = Dimensions.get("window").width - 20 * 2;
const screenDimensions = Dimensions.get("screen").height - 20 * 2;

const RegisterScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [name, setName] = useState("");
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
    setName("");
    setEmail("");
    setPassword("");
  };

  const nameHandler = (value) => setName(value);
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
                marginBottom: isShowKeyboard ? 30 : 130,
                width: dimensions.window - 20 * 2,
                // height: dimensions.screen - 20 * 2,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>
                  Welcome to the application!
                </Text>
              </View>

              <View>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={nameHandler}
                  value={email}
                />
              </View>

              <View style={{ marginTop: 20 }}>
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
                <Text style={styles.buttonTitle}>Sign up</Text>
              </TouchableOpacity>

              <Button
                title="Login to get started"
                onPress={() => {
                  keyboardHide();
                  navigation.navigate("Login");
                }}
              />
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

export default RegisterScreen;
