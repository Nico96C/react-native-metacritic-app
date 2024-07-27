/* eslint-disable prettier/prettier */
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Layout() {
  return (
    <View style={styles.cage}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  cage: {
    flex: 1,
    backgroundColor: "black",
  },
});
