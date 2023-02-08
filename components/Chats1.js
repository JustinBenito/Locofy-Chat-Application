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

const Chats1 = ({ style }) => {
  return (
    <View style={[styles.chats, style]}>
      <Image
        style={styles.chatIcon}
        resizeMode="cover"
        source={require("../assets/chat-icon1.png")}
      />
      <Text style={[styles.chats1, styles.mt7]}>Chats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt7: {
    marginTop: Margin.m_2xs,
  },
  chatIcon: {
    width: 20,
    height: 20,
  },
  chats1: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.roboto,
    color: Color.darkorange,
    textAlign: "left",
  },
  chats: {
    width: 50,
    alignItems: "center",
  },
});

export default Chats1;
