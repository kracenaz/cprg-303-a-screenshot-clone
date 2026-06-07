import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const albumCover =
  "https://images.genius.com/c6619186e8f93ff5c7ce61912e08d9c0.1000x1000x1.png";

export default function MiniPlayer() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: albumCover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          Blinding Lights
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          The Weeknd
        </Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playBtn}>
          <Ionicons name="play" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#282828",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  cover: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  artist: {
    color: "#b3b3b3",
    fontSize: 12,
    marginTop: 2,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  playBtn: {
    marginLeft: 4,
  },
});
