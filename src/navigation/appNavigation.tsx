import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Screens from "../constants/Screens";
import MovieDetail from "../screens/MovieDetail";
import Listing from "../screens/Listing";
import Searching from "../screens/Searching";

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.HOME}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Screens.MOVIE_DETAIL}
          component={MovieDetail}
          options={{
            headerShown: false,
            presentation: "transparentModal",
          }}
        />
        <Stack.Screen
          name={Screens.SEARCHING}
          component={Searching}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Screens.LISTING}
          component={Listing}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
