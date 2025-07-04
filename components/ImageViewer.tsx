import { StyleSheet } from "react-native"
import { Image } from "expo-image"

type Props = {
  placeholderImageSource: any
  selectedImage?: string
}

export default function ImageViewer({ placeholderImageSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource

  return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
