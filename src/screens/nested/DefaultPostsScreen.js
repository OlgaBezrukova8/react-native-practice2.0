import { useState, useEffect } from "react";
import { View, Image, StyleSheet, FlatList, Button } from "react-native";

const DefaultPostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={classes.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 350 }}
            />
          </View>
        )}
      />

      <Button title="go to map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="go to comments"
        onPress={() => navigation.navigate("Comments")}
      />
    </View>
  );
};

const classes = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center", // this style squeeze image
    justifyContent: "center",
  },
});

export default DefaultPostsScreen;
