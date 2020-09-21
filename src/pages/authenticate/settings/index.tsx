import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface SettingsProps {}

const Settings = (props: SettingsProps) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {},
});
