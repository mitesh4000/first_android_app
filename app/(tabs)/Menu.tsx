import MenuItemForm from "@/components/menuForm";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imagePath: string;
  ingredients: string[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function MenuItemsList() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch(
        "http://192.168.29.95:8000/api/v1/menuitems"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMenuItems(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch menu items");
      setLoading(false);
    }
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Image
        source={{
          uri:
            item.imagePath !== "not given"
              ? `http://192.168.29.95:8000/api/v1/menu-item-image/${item.imagePath}`
              : "https://via.placeholder.com/150",
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>₹{item.price.toFixed(2)}</Text>
        <Text style={styles.category}>{item.category}</Text>
        {item.ingredients.length > 0 && (
          <Text style={styles.ingredients}>
            Ingredients: {item.ingredients.join(", ")}
          </Text>
        )}
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Our Menu</Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
        <Text style={styles.buttonText}>add new menu item</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={styles.modalScroll}>
              <Text style={styles.modalTitle}>add details for new item</Text>
              <MenuItemForm></MenuItemForm>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    width: 300,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "90%",
    maxHeight: "90%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalScroll: {
    width: "100%",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 10,
  },
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    padding: 16,
  },
  menuItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: "#3498db",
    marginBottom: 4,
  },
  ingredients: {
    fontSize: 12,
    color: "#7f8c8d",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },

  gradientBackground: {
    padding: 20,
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    letterSpacing: 2,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 24,
    color: "#f0f0f0",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});
