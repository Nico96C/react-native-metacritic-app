/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.detail}>Detalle del Juego {id} </Text>
        <Link href="/" style={styles.links}>
          Volver atrás
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detail: {
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 32,
    fontSize: 24,
  },
  links: {
    color: "#60A5FA",
  },
});
