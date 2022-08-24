import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/HomeScreen";
import PanGesture from "./components/PanGesture";
import Test from "./components/Test";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pan Gesture">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Reanimated",
          }}
        />
        <Stack.Screen name="Pan Gesture" component={PanGesture} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    paddingLeft: 15,
    paddingTop: 15,
    justifyContent: "flex-start",
  },
});
