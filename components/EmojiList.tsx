"use client"

import { useState } from "react"
import { StyleSheet, FlatList, Platform, Pressable, Text } from "react-native"

// Use emoji characters instead of image files
const emoji = ["😀", "😂", "😍", "🤔", "😎", "🥳", "😴", "🤯", "😇", "🤪"]

type Props = {
  onSelect: (emoji: string) => void
  onCloseModal: () => void
}

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          key={index}
          style={styles.emojiContainer}
          onPress={() => {
            setSelectedEmoji(item)
            onSelect(item)
            onCloseModal()
          }}
        >
          <Text style={styles.emoji}>{item}</Text>
        </Pressable>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  emojiContainer: {
    width: 80,
    height: 80,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#464C55",
    borderRadius: 40,
  },
  emoji: {
    fontSize: 40,
  },
})
