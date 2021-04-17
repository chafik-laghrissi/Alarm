import React, { useState, useRef, useEffect, useCallback } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Text } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const TimeScreen = () => {
  const [currentTime, setCurrentTime] = useState({
    second: new Date().getSeconds(),
    minute: new Date().getMinutes(),
    hour: new Date().getHours()>12?new Date().getHours()-12:new Date().getHours(),
  });
  const isFocused = useIsFocused();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((preValue) => {
        return {
          second: preValue.second+1,
          minute:  preValue.minute+1/60,
          hour: new Date().getHours()>12?new Date().getHours()-12:new Date().getHours(),
        };
      });
    }, 1001);
    return () => clearInterval(interval);
  }, []);
  const date = new Date().toLocaleDateString();
  const secondAnimated = useRef(new Animated.Value(currentTime.second)).current;
  const minuteAnimated = useRef(new Animated.Value(currentTime.minute)).current;
  const hourAnimated = useRef(new Animated.Value(currentTime.hour)).current;
  const getSecondStyle = () => {
    Animated.timing(secondAnimated, {
      toValue: currentTime.second,
      useNativeDriver: false,
      duration:1200
    }).start();
    const rotate = secondAnimated.interpolate({
      inputRange: [0, 60],
      outputRange: ["0deg", "360deg"],
    });
    return { transform: [{ rotate }] };
  };
  const getMinuteStyle = () => {
    Animated.timing(minuteAnimated, {
      toValue: currentTime.minute,
      useNativeDriver: false,
      duration:1200
    }).start();
    const rotate = minuteAnimated.interpolate({
      inputRange: [0, 60],
      outputRange: ["0deg", "360deg"],
    });
    return { transform: [{ rotate }] };
  };
  const getHourStyle = () => {
    Animated.timing(hourAnimated, {
      toValue: currentTime.hour,
      useNativeDriver: false,
      duration:1200
    }).start();
    const rotate = hourAnimated.interpolate({
      inputRange: [0, 12],
      outputRange: ["0deg", "360deg"],
    });
    return { transform: [{ rotate }] };
  };
  return (
    <View style={styles.container}>
      <View style={styles.watchContainer}>
        <Animated.View style={getSecondStyle()}>
          <View style={styles.secondStyle} />
        </Animated.View>
        <View style={styles.pointStyle} />
        <Animated.View style={getMinuteStyle()}>
          <View style={styles.minuteStyle} />
        </Animated.View>
        <Animated.View style={getHourStyle()}>
          <View style={styles.hourStyle} />
        </Animated.View>
      </View>
      <Text>{days[new Date().getDay()] + " " + date}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  timeStyle: {
    fontSize: 30,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#FFFFFF",
    flex:1
  },
  watchContainer: {
    marginVertical: 35,
    borderRadius: 300,
    height: 300,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#FFFFFF",
    borderEndWidth:10,
    borderStartWidth:10,
    borderColor:"#00D9F6",
  },
  pointStyle: {
    position: "absolute",
    backgroundColor: "red",
    width: 15,
    height: 15,
    borderRadius: 15,
    alignSelf: "auto",
    elevation: 10,
  },
  secondStyle: {
    position: "absolute",
    height: 130,
    width: 2,
    borderColor: "rgba(255,0,0,.5)",
    borderWidth: 2,
    elevation: 6,
    bottom: 0,
  },
  minuteStyle: {
    position: "absolute",
    height: 100,
    width: 2,
    borderWidth: 2,
    borderColor: "#030406",
    elevation: 3,
    bottom: 0,
  },
  hourStyle: {
    position: "absolute",
    height: 80,
    width: 2,
    borderWidth: 2,
    borderColor: "rgba(80,80,80,0.3)",
    elevation: 1,
    bottom: 0,
  },
});
export default TimeScreen;
