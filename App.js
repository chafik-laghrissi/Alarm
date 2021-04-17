import "react-native-gesture-handler";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TimeScreen from "./src/screens/TimeScreen";
import TimerScreen from "./src/screens/TimerScreen";
import ChronometerScreen from "./src/screens/ChronometerScreen";
import BedTimeScreen from "./src/screens/BedTimeScreen";
import AlarmScreen from "./src/screens/AlarmScreen";

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => {
            return {
              tabBarIcon: ({ color, size }) => {
                switch (route.name) {
                  case "Time":
                    return (
                      <Ionicons name="time-outline" size={24} color={color} />
                    );
                  case "Alarm":
                    return (
                      <Ionicons
                        name="alarm-outline"
                        size={size ? size : 24}
                        color={color}
                      />
                    );
                  case "BedTime":
                    return (
                      <Ionicons name="bed-outline" size={24} color={color} />
                    );
                  case "Timer":
                    return (
                      <MaterialCommunityIcons
                        name="timer-sand"
                        size={24}
                        color={color}
                      />
                    );
                  case "chronometer":
                    return (
                      <MaterialIcons name="timer" size={24} color={color} />
                    );

                  default:
                    return (
                      <Ionicons
                        name="alarm-outline"
                        size={size ? size : 24}
                        color={color}
                      />
                    );
                }
              },
            };
          }}
          tabBarOptions={{
            activeTintColor: "#00D9F6",
            inactiveTintColor: "#6C7589",
            tabStyle: { backgroundColor: "#fff" },
            showLabel: false,
            showIcon: true,
          }}
          initialRouteName="Time"
        >
          <Tab.Screen name="Alarm" component={AlarmScreen} />
          <Tab.Screen name="Time" component={TimeScreen} />
          <Tab.Screen name="BedTime" component={BedTimeScreen} />
          <Tab.Screen name="chronometer" component={ChronometerScreen} />
          <Tab.Screen name="Timer" component={TimerScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" animated />
    </SafeAreaProvider>
  );
}
// export default function App() {
//   return (

//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
