import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Link href="/" style={styles.link}>
        Go to Home screen
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#ffd33d",
  },
})
