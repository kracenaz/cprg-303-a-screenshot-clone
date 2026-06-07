import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Tab = "Home" | "Search" | "Library" | "Create";

const tabs: { label: Tab; icon: string }[] = [
  { label: "Home", icon: "home" },
  { label: "Search", icon: "search" },
  { label: "Library", icon: "library" },
  { label: "Create", icon: "add-circle-outline" },
];

export default function BottomNav() {
  const [active, setActive] = useState<Tab>("Home");

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const color = active === tab.label ? "white" : "#b3b3b3";
        return (
          <TouchableOpacity
            key={tab.label}
            style={styles.tab}
            onPress={() => setActive(tab.label)}
          >
            <Ionicons name={tab.icon as any} size={24} color={color} />
            <Text style={[styles.label, { color }]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "black",
    borderTopWidth: 1,
    borderTopColor: "#282828",
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontSize: 11,
  },
});
