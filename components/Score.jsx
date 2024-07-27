/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from "react-native";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 97) return styles.bgRed;
    if (percentage < 98) return styles.bgYel;
    return styles.bgGreen;
  };

  const classColor = getColors();

  return (
    <View style={[styles.container, classColor]}>
      <Text style={styles.score}> {score} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  container: {
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  bgRed: {
    backgroundColor: "red",
  },
  bgYel: {
    backgroundColor: "#fde047",
  },
  bgGreen: {
    backgroundColor: "green",
  },
});
