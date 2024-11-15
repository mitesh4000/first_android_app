import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            // <IconSymbol size={28} name="home" color={color} />
            <Ionicons name="home" size={24} color="#666" />
          ),
        }}
      />

      <Tabs.Screen
        name="dining"
        options={{
          title: "dining",
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant" size={24} color="#666" />
          ),
        }}
      />
      <Tabs.Screen
        name="purchases"
        options={{
          title: "purchase",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={24} color="#666" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color="#666" />
          ),
        }}
      />
    </Tabs>
  );
}
