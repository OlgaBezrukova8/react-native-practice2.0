import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={classes.container}>
      <Text>Home screen</Text>
    </View>
  );
};

const classes = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
