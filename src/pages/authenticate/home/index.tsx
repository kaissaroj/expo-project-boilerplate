import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { userDispatch, userState } from "../../../contexts/UserContext";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigation = useNavigation();
  const dispatch = userDispatch();
  const logOut = () => {
    dispatch({
      type: "logout",
    });
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text>Go To Settings</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => logOut()}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
