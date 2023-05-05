import { View, Text, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={classes.container}>
      <Text>PostsScreen</Text>
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

export default PostsScreen;
