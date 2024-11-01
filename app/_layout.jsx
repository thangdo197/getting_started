import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Application</Text>
      </View>
      <View style={styles.mainContent}>{children}</View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &copy; {new Date().getFullYear()} My Application
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: "#4CAF50",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  mainContent: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  footer: {
    padding: 10,
    backgroundColor: "#333",
  },
  footerText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Layout;
