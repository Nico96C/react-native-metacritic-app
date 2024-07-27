/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function About() {
  return (
    <ScrollView>
      <Link href="/" style={styles.link}>
        Volver al Inicio
      </Link>

      <Text style={styles.title}>Sobre el Proyecto</Text>

      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
      <Text style={styles.longtext}>
        lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit amet,
        consectetur adipiscing elit lorem ipsum sit amet, consectetur adipiscing
        elit lorem ipsum sit amet, consectetur adipiscing elit lorem ipsum sit
        amet, consectetur adipiscing elit
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 32,
    fontSize: 24,
  },
  longtext: {
    color: "white",
    opacity: 0.9,
    marginBottom: 16,
  },
  link: {
    color: "#60A5FA",
    marginTop: 40,
  },
});
