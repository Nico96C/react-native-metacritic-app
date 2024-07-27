import { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Text, Animated } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text style={styles.title}> {game.title} </Text>
        <Score score={game.score} maxScore={100} />
        <Text style={styles.description}>
          {game.description.slice(0, 100)}...
        </Text>
      </View>
    </View>
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
    backgroundColor: "rgba(100, 116, 139, 0.25)",
    padding: 16,
    borderRadius: 12,
    gap: 16,
    marginBottom: 40,
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
    marginTop: 10,
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
});
