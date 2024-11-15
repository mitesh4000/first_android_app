import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const handleLogout = () => {
    // Implement logout logic
    console.log("Logging out...");
  };

  const menuItems = [
    {
      id: 1,
      icon: "card",
      label: "My Subscriptions",
      onPress: () => console.log("Navigating to subscriptions..."),
    },
    {
      id: 2,
      icon: "cart",
      label: "My Cart",
      onPress: () => console.log("Navigating to cart..."),
    },
    {
      id: 3,
      icon: "power",
      label: "Logout",
      onPress: handleLogout,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../assets/images/profile.jpeg")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Ionicons name="pencil" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>Anonymous Shah</Text>
        <Text style={styles.email}>anonymous@gmail.com</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={24} color="#333" />
            </View>
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: "#333",
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
    borderBottomRightRadius: 80,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
  },
  editImageButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#333",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: "#444",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: "center",
  },
  activeNavItem: {
    opacity: 1,
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
  },
  activeNavText: {
    color: "#000",
  },
});
