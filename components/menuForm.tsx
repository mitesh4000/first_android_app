import * as DocumentPicker from "expo-document-picker";
import { Formik } from "formik";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

const MenuItemForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number")
      .typeError("Price must be a number"),
    category: Yup.string().required("Category is required"),
    imagePath: Yup.string()
      .url("Image path must be a valid URL")
      .required("Image path is required"),
    ingredients: Yup.array()
      .of(Yup.string().required("Ingredient is required"))
      .required("At least one ingredient is required"),
    active: Yup.boolean(),
  });

  const [document, setDocument] = React.useState<any>(null);
  const [price, setPrice] = React.useState<string>("");
  const [imagePath, setImagePath] = React.useState<string>("");

  const handleSelectDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });

      if (result.type === "success") {
        setDocument(result);
      } else {
        Alert.alert("Document selection canceled");
      }
    } catch (error) {
      Alert.alert("Error picking document:");
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        price: "",
        category: "",
        imagePath: "",
        ingredients: [""], // Start with one empty ingredient
        active: true,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Here are the values:", values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
          />
          {touched.name && errors.name && (
            <Text style={styles.error}>{errors.name}</Text>
          )}

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("description")}
            onBlur={handleBlur("description")}
            value={values.description}
          />
          {touched.description && errors.description && (
            <Text style={styles.error}>{errors.description}</Text>
          )}

          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => {
              handleChange("price")(text.replace(/[^0-9.]/g, "")); // Allow only numbers and decimal point
            }}
            onBlur={handleBlur("price")}
            value={values.price}
          />
          {touched.price && errors.price && (
            <Text style={styles.error}>{errors.price}</Text>
          )}

          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("category")}
            onBlur={handleBlur("category")}
            value={values.category}
          />
          {touched.category && errors.category && (
            <Text style={styles.error}>{errors.category}</Text>
          )}

          <Text style={styles.label}>Image Path</Text>
          <TouchableOpacity
            onPress={() => handleSelectDocument}
          ></TouchableOpacity>
          {touched.imagePath && errors.imagePath && (
            <Text style={styles.error}>{errors.imagePath}</Text>
          )}

          <TouchableOpacity onPress={() => handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
  label: {
    marginVertical: 5,
    fontWeight: "bold",
  },
  error: {
    fontSize: 12,
    color: "red",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default MenuItemForm;
