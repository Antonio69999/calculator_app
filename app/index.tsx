import { useState } from "react";
import { Text, StyleSheet, View, Switch } from "react-native";
import { ThemeContext } from "../src/context/ThemeContext";
import { StatusBar } from "expo-status-bar";
import { Colours } from "@/src/styles/Colours";
import Keyboard from "../src/components/Keyboard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <StatusBar style="auto"></StatusBar>
        <Switch
          value={theme === "light"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        ></Switch>
        <Keyboard></Keyboard>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.light,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
