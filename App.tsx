import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import PageTitle from "./components/PageTitle";
import PageTable from "./components/PageTable";
import PageEvent from "./components/PageEvent";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <PageTitle title="Manage your profile privacy" />
        <PageTable />
      </View>
      <PageEvent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    height: "100vh",
  },
});
