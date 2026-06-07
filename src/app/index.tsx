import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";

const albumCover = "https://images.genius.com/c6619186e8f93ff5c7ce61912e08d9c0.1000x1000x1.png";
const artistPhoto = "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9";
const tracks = ["Make Them Cry", "Dust", "Whisper My Name", "Janice STFU", "Ran To Atlanta",];
const Tower = "https://www.cp24.com/resizer/v2/F2QOJ5FXDBCAZNGN7SPIFRJRA4.jpg?smart=true&auth=55d4391422192688a093d2be568b6c519bca36f2d0b9587e3bd6864d756b458b&width=1200&height=630";

export default function Index() {
  return (
    // Album Cover, Album Title and Info and Artist Name
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.backButton}>‹</Text>
        <Image source={{ uri: albumCover }} style={styles.albumImage} />
        <Text style={styles.title}>ICEMAN</Text>
        <View style={styles.artistRow}>
          <Image source={{ uri: artistPhoto }} style={styles.artistImage} />
          <Text style={styles.artistName}>Drake</Text>
        </View>
        <Text style={styles.albumInfo}>
          Album • May 15 • Latest release
        </Text>

        {/* Row after Album and Artist Info - Music Buttons */}
        <View style={styles.controlRow}>
          <Image source={{ uri: Tower }} style={styles.towerSize} />
          <Text style={styles.icon}>＋</Text>
          <Text style={styles.icon}> ↓</Text>
          <Text style={styles.icon}>•••</Text>
          <View style={{ flex: 1 }} />

          <Text style={styles.icon}>⇄</Text>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playText}>▶</Text>
          </TouchableOpacity>
        </View>

        {/* //Track List with Artist Name and additional inserts*/}
        {tracks.map((track, index) => (
          <View key={index} style={styles.trackRow}>
            <View style={styles.trackTextBox}>
              <Text style={styles.trackTitle}>{track}</Text>
              <Text style={styles.trackInfo}>E ⏵︎ Video • Drake</Text>
            </View>
            <Text style={styles.dotsBesideTracks}>• • •</Text>
          </View>
        ))}
      </ScrollView>

      {/* Working Alert Button - Press to activate */}
        <View style={styles.alertContainer}>
          <Button
            title="Alert"
            onPress={() => {
              alert("Alert Button pressed");
            }}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },

  towerSize: {
    width: 33,
    height: 40,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#aaaaaa",
    marginRight: 20,
  },

  content: {
    paddingTop: 20,
    paddingHorizontal: 22,
    paddingBottom: 80,
  },

  backButton: {
    color: "white",
    fontSize: 42,
  },

  albumImage: {
    width: 310,
    height: 310,
    alignSelf: "center",
    marginVertical: 24,
    borderRadius: 4,
  },

  title: {
    color: "white",
    fontSize: 38,
    fontWeight: "700",
    marginBottom: 14,
  },

  artistRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  artistImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  artistName: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  albumInfo: {
    color: "#aaaaaa",
    fontSize: 15,
    marginBottom: 24,
  },

  controlRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  icon: {
    color: "#aaaaaa",
    fontSize: 28,
    marginRight: 24,
    borderColor: "#aaaaaa",
  },

  playButton: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#1DB954",
    justifyContent: "center",
    alignItems: "center",
  },

  playText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 3,
  },

  alertContainer: {
    marginBottom: 28,
  },

  trackRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },

  trackTextBox: {
    flex: 1,
  },

  trackTitle: {
    color: "white",
    fontSize: 20,
    marginBottom: 6,
  },

  trackInfo: {
    color: "#aaaaaa",
    fontSize: 15,
  },

  dotsBesideTracks: {
    color: "#aaaaaa",
    fontSize: 15,
  },
});