import { View, Text, StyleSheet } from "react-native";

const CreateScreen = () => {
  return (
    <View style={classes.container}>
      <Text>CreateScreen</Text>
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

export default CreateScreen;
