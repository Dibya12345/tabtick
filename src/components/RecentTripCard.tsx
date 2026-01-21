import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RecentTripCard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Recent Trips</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Coming soon</Text>
        </View>
      </View>

      {/* Card */}
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.emptyTitle}>No recent activity</Text>
            <Text style={styles.emptySubtitle}>
              Trips you create will appear here for quick access.
            </Text>
          </View>

          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <MaterialIcons name="explore" size={18} color="#3B82F6" />
            <Text style={styles.buttonText}>Learn how it works</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#131616",
  },

  badge: {
    backgroundColor: "rgba(59,130,246,0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#3B82F6",
  },

  cardWrapper: {
    padding: 8,
  },

  card: {
    alignItems: "center",
    gap: 16,
    borderRadius: 24,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#E5E7EB",
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: "transparent",
  },

  content: {
    alignItems: "center",
    gap: 8,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#131616",
  },

  emptySubtitle: {
    fontSize: 12,
    color: "#6C7E7F",
    textAlign: "center",
    maxWidth: 200,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(59,130,246,0.05)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#3B82F6",
  },
});
