import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const HeaderIcons = ({}) => {
  return (
    <TouchableOpacity>
      <View style={styles.iconContainer}>
        <MaterialIcons name="add" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

export default HeaderIcons;

const styles = StyleSheet.create({
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
