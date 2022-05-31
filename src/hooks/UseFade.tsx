import { useRef } from "react";
import { Animated } from "react-native";

export const UseFade = () => {

    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = (callback?: Function ) => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(()=> callback ? callback() : null);
    };
    const fideOut = () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };


    return {
        opacity,
        fadeIn,
        fideOut

    }
        
}
