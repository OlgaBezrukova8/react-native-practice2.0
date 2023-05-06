// import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

import { useRoute } from "./src/hooks/useRoute";

// SplashScreen.preventAutoHideAsync();

// TODO: fix fonts

export default function App() {
  const routing = useRoute({});
  // const [fontsLoaded] = useFonts({
  //   "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  //   "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  // });

  // useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    // <Provider>
      <NavigationContainer>{routing}</NavigationContainer>
    // </Provider>
  );
}
