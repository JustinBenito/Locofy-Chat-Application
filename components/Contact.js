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

const Contact = ({ style }) => {
  return (
    <View style={[styles.contact, style]}>
      <Image
        style={styles.userIcon}
        resizeMode="cover"
        source={require("../assets/user-icon.png")}
      />
      <Text style={[styles.contacts, styles.mt7]}>Contacts</Text>
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
  contacts: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.roboto,
    color: Color.gray_300,
    textAlign: "left",
  },
  contact: {
    width: 50,
    alignItems: "center",
  },
});

export default Contact;
