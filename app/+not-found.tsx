import { View, Text, StyleSheet } from "react-native"
import { Link, Stack } from "expo-router"

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View style={styles.container}>
        <Text style={styles.text}>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          Go to home screen!
        </Link>
      </View>
    </>
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
