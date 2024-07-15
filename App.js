import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="Light" />
      <Image source={{ uri: "https://www.metacritic.com/a/img/resize/51057e1e2b2e488b9a645fe7ad6aa90a3039f433/catalog/provider/6/3/6-1-899576-13.jpg?auto=webp&fit=cover&height=300&width=200"}} style={{width: 242, height: 300}} />
      <Text style={styles.texto}>Open up App.js to start working on your app! este texto en español!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
  }
});
