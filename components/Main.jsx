import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Logo } from "../components/Logo";
import { AnimatedGameCard } from "./GameCard.jsx";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View style={{ marginBottom: 7, marginTop: 5 }}>
        <Logo />
      </View>
      <Link href="/about" style={styles.link}>
        Ir al About
      </Link>
      {games.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#60A5FA",
  },
});
