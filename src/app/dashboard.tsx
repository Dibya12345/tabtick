import CreateTripButton from "@/components/CreateTripButton";
import HeaderIcons from "@/components/HeaderIcons";
import ProfileIcon from "@/components/ProfileIcons";
import RecentTripCard from "@/components/RecentTripCard";
import TravelIllustration from "@/components/TravelIllustration";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const Dashboard = () => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={{
        marginTop: height * 0.04,
        paddingHorizontal: width * 0.04,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <ProfileIcon />
        <View
          style={{
            flexDirection: "row",
            gap: 8,
          }}
        >
          <HeaderIcons />
          <HeaderIcons />
        </View>
      </View>
      <TravelIllustration />
      <View style={styles.container}>
        <Text style={styles.title}>Ready for takeoff?</Text>
        <Text style={styles.subtitle}>
          Your travel checklists will live here. Plan your next adventure with
          zero stress.
        </Text>
      </View>
      <View style={styles.container}>
        <CreateTripButton />
        <RecentTripCard />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#131616",
    lineHeight: 28,
    letterSpacing: -0.4,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6C7E7F",
    lineHeight: 24,
    textAlign: "center",
    maxWidth: 280,
  },
});
