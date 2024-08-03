/* eslint-disable prettier/prettier */
import { StyleSheet, View } from "react-native";

export function Screen({ children }) {
  return <View style={styles.main}>{children}</View>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 16,
    paddingHorizontal: 8,
  },
});
