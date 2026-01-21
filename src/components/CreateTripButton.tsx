import colors from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CreateTripButton = ({}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <Text style={styles.text}>Create your first trip</Text>

      <View style={styles.iconContainer}>
        <MaterialIcons name="add" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

export default CreateTripButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 280,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 16,
    borderRadius: 16,
    backgroundColor: colors.primary,
    shadowColor: "#4F46E5",
    shadowOpacity: 0.2,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
});
