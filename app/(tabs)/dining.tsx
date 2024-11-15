import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const categories = [
    { id: 1, name: "Vegan", icon: "🥬" },
    { id: 2, name: "Meat", icon: "🥩" },
    { id: 3, name: "Dessert", icon: "🍰" },
    { id: 4, name: "Fast Food", icon: "🍔" },
  ];

  const restaurants = [
    {
      id: 1,
      name: "McDonalds",
      rating: 4.1,
      image: require("../../assets/images/chola.jpeg"),
    },
    {
      id: 2,
      name: "Subway",
      rating: 4.1,
      image: require("../../assets/images/chola.jpeg"),
    },
    {
      id: 3,
      name: "Pizza hut",
      rating: 4.1,
      image: require("../../assets/images/chola.jpeg"),
    },
    {
      id: 4,
      name: "Starbucks",
      rating: 4.1,
      image: require("../../assets/images/chola.jpeg"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo_light.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.location}>
          <MaterialIcons name="location-on" size={24} color="red" />
          <View>
            <Text style={styles.locationLabel}>Current Location</Text>
            <Text style={styles.locationText}>Vadodara</Text>
          </View>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Food"
          placeholderTextColor="#666"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.categoriesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Categories</Text>
            <MaterialIcons name="store" size={24} color="#333" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Restaurants */}
        <View style={styles.restaurantsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Restaurants</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.restaurantGrid}>
            {restaurants.map((restaurant) => (
              <TouchableOpacity
                key={restaurant.id}
                style={styles.restaurantCard}
              >
                <Image
                  source={restaurant.image}
                  style={styles.restaurantImage}
                />
                <View style={styles.restaurantInfo}>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <View style={styles.rating}>
                    <MaterialIcons name="star" size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{restaurant.rating}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#333",
  },
  logo: {
    width: 40,
    height: 40,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationLabel: {
    color: "#fff",
    fontSize: 12,
  },
  locationText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categoriesSection: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoryCard: {
    alignItems: "center",
    marginRight: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "500",
  },
  restaurantsSection: {
    padding: 16,
  },
  viewAll: {
    color: "#666",
    fontSize: 14,
  },
  restaurantGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  restaurantCard: {
    width: "48%",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  restaurantImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  restaurantInfo: {
    padding: 8,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#666",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
  },
});
