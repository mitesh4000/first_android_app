import { router, useNavigation } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const handleLogin = () => {
    // Handle login navigation
    console.log("Navigating to login...");
  };

  const handleCreateAccount = () => {
    // Handle create account navigation
    console.log("Navigating to create account...");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo_light.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Welcome Content */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome To</Text>
        <Text style={styles.appName}>TABLE TREATZ</Text>
        <Text style={styles.tagline}>SATISFY YOUR CRAVINGS FOR SAVINGS!</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("./login")}
        >
          <Text style={styles.buttonText}>Log In Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "30%",
    backgroundColor: "#333",
    borderBottomRightRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 28,
    marginBottom: 8,
    fontWeight: "500",
  },
  appName: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    letterSpacing: 1,
  },
  buttonContainer: {
    padding: 24,
    paddingBottom: 48,
  },
  button: {
    backgroundColor: "#333",
    borderRadius: 30,
    paddingVertical: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});
