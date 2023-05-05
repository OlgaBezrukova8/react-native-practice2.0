import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={classes.container}>
      <Text>ProfileScreen</Text>
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

export default ProfileScreen;
