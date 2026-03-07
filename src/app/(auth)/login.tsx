import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const colors = {
  primary: "#367b7d",
  accent: "#E08E77",
  "background-light": "#fafaf9",
  "background-dark": "#161a1d",
};

const LoginScreen = ({  }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login pressed", { email, password });
  };

  const handleSignUp = () => {
    // Navigate to sign up screen
    console.log("Sign up pressed");
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen
    console.log("Forgot password pressed");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors["background-light"]}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={colors["background-light"]}
          />
        </TouchableOpacity>

        {/* Logo/Icon */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/tabitick_logo_hd.png")}
            style={{ width: 220, height: 100, resizeMode: "contain" }}
          />
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.subText}>Sign in to continue to Tabitick</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>

          <View style={styles.inputWrapper}>
            {email.length > 0 && (
              <TouchableOpacity onPress={() => setEmail("")}>
                <Entypo
                  name="circle-with-cross"
                  size={20}
                  color="#6b7280"
                  style={styles.inputIcon}
                />
              </TouchableOpacity>
            )}

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9ca3af"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            {password.length > 0 && (
              <TouchableOpacity onPress={() => setPassword("")}>
                <Entypo
                  name="circle-with-cross"
                  size={20}
                  color="#6b7280"
                  style={styles.inputIcon}
                />
              </TouchableOpacity>
            )}

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#9ca3af"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["background-light"],
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.accent,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "600",
    fontStyle: "italic",
    color: colors.primary,
    textAlign: "center",
  },

  subText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#6b7280",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 28,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: "row-reverse",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: "#6b7280",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    color: "#6b7280",
    fontSize: 14,
  },
  signUpLink: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default LoginScreen;
