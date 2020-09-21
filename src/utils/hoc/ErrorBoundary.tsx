import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { userState } from "../../contexts/UserContext";

const ErrorBoundary = (props: any) => {
  const { error } = userState();
  return error ? (
    <View style={[styles.container, styles.centered]}>
      <Text>Something wrong occurs.</Text>
    </View>
  ) : (
    props.children
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: wp("5%"),
  },
  centered: {
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
export default ErrorBoundary;
