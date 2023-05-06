import { createStackNavigator } from "@react-navigation/stack";

import DefaultPostsScreen from "../nested/DefaultPostsScreen";
import MapScreen from "../nested/MapScreen";
import CommentsScreen from "../nested/CommentsScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen name="Map" component={MapScreen} />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
