import { View } from "react-native"
import { Image } from "expo-image"

type Props = {
  imageSize: number
  stickerSource: any
}

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{
          width: imageSize / 4,
          height: imageSize / 4,
        }}
      />
    </View>
  )
}
