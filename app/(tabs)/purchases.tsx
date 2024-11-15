import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function RestaurantDetails() {
  const [activeTab, setActiveTab] = useState("menu");
  const [itemCount, setItemCount] = useState(2);

  const tags = [
    { id: 1, label: "Veg", icon: "🟢" },
    { id: 2, label: "Non-veg", icon: "🔴" },
    { id: 3, label: "Bestseller" },
    { id: 4, label: "Rating 4.0+" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Come With 15 People & Pay For 12 Only People",
      image: require("../../assets/images/images.jpeg"),
      quantity: 2,
    },
    {
      id: 2,
      name: "Double Cheese Burger Combo",
      image: require("../../assets/images/burger.jpeg"),
      quantity: 0,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <Text style={styles.searchPlaceholder}>Search</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Restaurant Info */}
        <View style={styles.restaurantInfo}>
          <View>
            <Text style={styles.restaurantName}>Baroda Sandwich</Text>
            <Text style={styles.cuisineText}>Sandwich, Pizza, FastFood</Text>
            <Text style={styles.locationText}>Gotri, Vadodara</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.5 ⭐</Text>
            <Text style={styles.reviewCount}>402 Reviews</Text>
          </View>
        </View>

        {/* Tags */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tagsContainer}
        >
          {tags.map((tag) => (
            <TouchableOpacity key={tag.id} style={styles.tag}>
              {tag.icon && <Text style={styles.tagIcon}>{tag.icon}</Text>}
              <Text style={styles.tagText}>{tag.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "menu" && styles.activeTab]}
            onPress={() => setActiveTab("menu")}
          >
            <Ionicons
              name="menu"
              size={20}
              color={activeTab === "menu" ? "#000" : "#666"}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === "menu" && styles.activeTabText,
              ]}
            >
              Menu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "offers" && styles.activeTab]}
            onPress={() => setActiveTab("offers")}
          >
            <Ionicons
              name="pricetag"
              size={20}
              color={activeTab === "offers" ? "#000" : "#666"}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === "offers" && styles.activeTabText,
              ]}
            >
              Offers
            </Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuItems}>
          {menuItems.map((item) => (
            <View key={item.id} style={styles.menuItem}>
              <Image source={item.image} style={styles.menuItemImage} />
              <View style={styles.menuItemContent}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <View style={styles.quantitySelector}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => setItemCount(Math.max(0, itemCount - 1))}
                  >
                    <Text style={styles.quantityButtonText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => setItemCount(itemCount + 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Cart Bar */}
      <View style={styles.cartBar}>
        <View style={styles.cartInfo}>
          <Ionicons name="cart" size={24} color="#333" />
          <Text style={styles.cartText}>2 Items Added</Text>
        </View>
        <TouchableOpacity style={styles.viewCartButton}>
          <Text style={styles.viewCartText}>View Cart</Text>
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
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#333",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButton: {
    marginRight: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchPlaceholder: {
    marginLeft: 8,
    color: "#666",
  },
  restaurantInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cuisineText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 2,
  },
  locationText: {
    fontSize: 14,
    color: "#999",
  },
  ratingContainer: {
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 8,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  reviewCount: {
    fontSize: 12,
    color: "#666",
  },
  tagsContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  tagIcon: {
    marginRight: 4,
  },
  tagText: {
    fontSize: 14,
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  tabText: {
    marginLeft: 4,
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    color: "#000",
  },
  menuItems: {
    padding: 16,
  },
  menuItem: {
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
  menuItemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  menuItemContent: {
    padding: 12,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  quantityButton: {
    width: 32,
    height: 32,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quantityText: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: "500",
  },
  cartBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  cartInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  viewCartButton: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  viewCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
