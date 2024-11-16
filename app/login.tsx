import { router, useNavigation } from "expo-router";

import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useBearStore from "./utils/zustandStore";
const { bears } = useBearStore();
const [authToken, setToken] = useState("");
export default function LoginScreen() {
  const navigation = useNavigation();
  interface FormState {
    email: string | undefined;
    password: string | undefined;
  }

  interface FormValidationState {
    email: string | undefined;
    password: string | undefined;
  }
  const [formState, setFormState] = useState<FormState>({
    email: "test@mail.com",
    password: "password",
  });

  // Initialize validation state
  const [formValidationState, setFormValidationState] =
    useState<FormValidationState>({
      email: undefined,
      password: undefined,
    });

  const validate = () => {
    if (!formState.email) {
      formValidationState.email = "email is required";
      return false;
    }
    if (!formValidationState.password) {
      formValidationState.email = "password is required";
      return false;
    }
    console.log("This is a log message");

    return true;
  };
  const handleLogin = async () => {
    // if (!validate()) return;

    try {
      const response = await fetch(
        "http://192.168.29.95:8000/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formState.email,
            password: formState.password,
          }),
        }
      );
      const data = await response.json();
      if (data.error) {
        Alert.alert("Login failed", data.message || data.message);
      }
      console.log(data.data);
      if (data.data) {
        router.navigate("./(tabs)");
        router.replace("/(tabs)", { relativeToDirectory: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo_light.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>Please login to using app</Text>
        <Text>{bears}</Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              email<Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="email"
              value={formState.email}
              onChangeText={(text) =>
                setFormState({ ...formState, email: text })
              }
            />
            <Text style={styles.invalidInput}>{formValidationState.email}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              password<Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="password"
              value={formState.password}
              onChangeText={(text) =>
                setFormState({ ...formState, password: text })
              }
              secureTextEntry
            />

            <Text style={styles.invalidInput}>
              {formValidationState.password}
            </Text>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleLogin()}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.alternativeLogin}>
              <Text style={styles.alternativeText}>Login with </Text>
              <TouchableOpacity>
                <Text style={styles.emailText}>Email Address</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signupContainer}>
              <Text style={styles.noAccountText}>Don't Have An Account? </Text>
              <TouchableOpacity>
                <Text style={styles.signupText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  invalidInput: {
    fontSize: 12,
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 200,
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
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },
  form: {
    marginTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  required: {
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#333",
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  alternativeLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  alternativeText: {
    fontSize: 16,
    color: "#666",
  },
  emailText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  noAccountText: {
    fontSize: 16,
    color: "#666",
  },
  signupText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
});
