/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView style={styles.link}>
      <Link asChild href="/">
        <Pressable>
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
        </Pressable>
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
    paddingTop: 56,
  },
});
