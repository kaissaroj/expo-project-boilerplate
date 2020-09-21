import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { userDispatch, userState } from "../../../contexts/UserContext";

interface LoginProps {}

const Login = (props: LoginProps) => {
  const dispatch = userDispatch();
  const submitLogin = () => {
    dispatch({
      type: "login",
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => submitLogin()}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "gray",
    width: wp("15%"),
    height: hp("3%"),
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
});
