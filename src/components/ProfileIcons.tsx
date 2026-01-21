import colors from "@/utils";
import { StyleSheet, Text, View } from "react-native";

const ProfileIcon = ({ name = "Alex" }) => {
  const initial = name?.charAt(0).toUpperCase() || "U";

  return (
    <View style={styles.container}>
      {/* Profile Icon */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>

      {/* Greeting Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hello, {name}!</Text>
        <Text style={styles.subtitle}>Ready for departure?</Text>
      </View>
    </View>
  );
};

export default ProfileIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  textContainer: {
    marginLeft: 12,
  },
  title: {
    fontSize: 18, // text-lg
    fontWeight: "700",
    color: "#131616",
    lineHeight: 22,
    letterSpacing: -0.3,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 12, // text-xs
    fontWeight: "500",
    color: "#6c7e7f",
  },
});
