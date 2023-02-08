import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";

const Contacts = ({ style }) => {
  return (
    <View style={[styles.contacts, style]}>
      <Image
        style={styles.userIcon}
        resizeMode="cover"
        source={require("../assets/user-icon1.png")}
      />
      <Text style={[styles.contacts1, styles.mt7]}>Contacts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt7: {
    marginTop: Margin.m_2xs,
  },
  userIcon: {
    width: 18,
    height: 20,
  },
  contacts1: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.roboto,
    color: Color.darkorange,
    textAlign: "left",
  },
  contacts: {
    width: 50,
    alignItems: "center",
  },
});

export default Contacts;
