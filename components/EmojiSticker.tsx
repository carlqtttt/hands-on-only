import { View, Text, StyleSheet } from "react-native"

type Props = {
  imageSize: number
  stickerSource: string
}

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={[styles.stickerContainer, { top: -350 }]}>
      <Text style={styles.emoji}>{stickerSource}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  stickerContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 80,
  },
})
