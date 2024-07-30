import { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <Pressable>
        {({ pressed }) => (
          <View key={game.slug} style={pressed ? styles.card2 : styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <View style={styles.contain}>
              <Text style={styles.title}>{game.title}</Text>
              <Score score={game.score} maxScore={100} />
              <Text style={styles.description}>
                {game.description.slice(0, 100)}...
              </Text>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "rgba(100, 116, 139, 0.25)",
    padding: 16,
    borderRadius: 12,
    gap: 12,
    marginBottom: 12,
    marginTop: 4,
    marginHorizontal: 4,
  },
  card2: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(100, 116, 139, 0.60)",
    padding: 16,
    borderRadius: 12,
    gap: 12,
    marginBottom: 12,
    marginTop: 4,
    marginHorizontal: 4,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    marginBottom: 4,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
    marginTop: 8,
    flexShrink: 0,
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  contain: {
    flexShrink: 1,
    marginLeft: 8,
  },
});
