import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

const CARD_WIDTH = 320;
const CARD_HEIGHT = (CARD_WIDTH * 3) / 4;

export default function TravelIllustration() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <LinearGradient
          colors={["rgba(54,123,125,0.35)", "transparent"]}
          start={{ x: 0.2, y: 0.3 }}
          end={{ x: 0.8, y: 0.8 }}
          style={styles.blobOne}
        />
        <LinearGradient
          colors={["rgba(224,142,119,0.35)", "transparent"]}
          start={{ x: 0.8, y: 0.7 }}
          end={{ x: 0.2, y: 0.2 }}
          style={styles.blobTwo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 24,
    backgroundColor: "rgba(54,123,125,0.05)",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  blobOne: {
    position: "absolute",
    width: 300,
    height: 300,
    top: -80,
    left: -80,
  },
  blobTwo: {
    position: "absolute",
    width: 300,
    height: 300,
    bottom: -80,
    right: -80,
  },
});
