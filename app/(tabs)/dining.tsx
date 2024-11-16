import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function Component() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products. Please try again later.");
      setLoading(false);
    }
  };

  const ProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Our Products</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    textAlign: "center",
  },
  productList: {
    padding: 16,
  },
  productItem: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  productInfo: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
});
