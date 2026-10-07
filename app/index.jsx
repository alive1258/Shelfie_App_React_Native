import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
  },
});
