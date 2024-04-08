import { Button, StyleSheet, View } from "react-native";
import * as StoreReview from "expo-store-review";

export default function App() {
  const askReview = async () => {
    if (await StoreReview.isAvailableAsync()) {
      StoreReview.requestReview();
    }
  };

  return (
    <View style={styles.container}>
      <Button title="review" onPress={askReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
