import { View, Text, Image } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StyleSheet } from "react-native-web";
export default function LoginScreen() {
  //   const { isSignedIn } = useAuth();

  //   if (isSignedIn) return <Redirect href={"/"} />;

  //   return <home />;
  return (
    <View>
      <View style={{ paddingTop: 10 }}>
        <Image source={require("../assets/images/imgpla.png")} />
      </View>
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Your Ultimate{" "}
          <Text
            style={{
              color: Colors.PRIMARY,
            }}
          >
            Community Business Directory
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },
});
