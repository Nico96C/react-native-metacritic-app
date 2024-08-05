/* eslint-disable prettier/prettier */
import { Stack } from "expo-router";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: gameInfo ? gameInfo.title : "Loading...",
          headerRight: () => {},
        }}
      />
      <View style={styles.container}>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View style={styles.game}>
              {gameInfo.img && (
                <Image source={{ uri: gameInfo.img }} style={styles.imagen} />
              )}
              <Score score={gameInfo.score} maxScore={100} />
              <Text style={styles.title}>{gameInfo.title}</Text>
              <Text style={styles.detail}>{gameInfo.description}</Text>
              
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  detail: {
    color: "white",
    opacity: 0.7,
    fontSize: 16,
    marginBottom: 32,
    textAlign: "left",
    marginTop: 16,
  },
  score: {
    color: "white",
    fontSize: 14,
    marginBottom: 16,
  },
  imagen: {
    marginBottom: 16,
    borderRadius: 4,
    width: 214,
    height: 294,
  },
  game: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  }
});
