import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { Margin, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const NewChat = ({ onClose }) => {
  return (
    <View style={styles.newChat}>
      <Text style={[styles.startNewChat, styles.timeTypo]}>Start new chat</Text>
      <View style={[styles.input, styles.mt28]}>
        <View style={styles.inputArea}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
          <TextInput
            style={[styles.albertomailcom, styles.ml22]}
            placeholder="Email Address"
            keyboardType="default"
            placeholderTextColor="#a4a4a4"
          />
        </View>
      </View>
      <Pressable style={[styles.messageButton, styles.mt28]}>
        <Text style={[styles.time, styles.timeTypo]}>Message</Text>
        <Image
          style={[styles.frameIcon, styles.ml5]}
          resizeMode="cover"
          source={require("../assets/materialsymbolssendrounded.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml22: {
    marginLeft: Margin.m_xl,
  },
  ml5: {
    marginLeft: Margin.m_4xs,
  },
  mt28: {
    marginTop: Margin.m_3xl,
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.roboto,
  },
  startNewChat: {
    fontSize: 20,
    fontWeight: "700",
    color: Color.gray_200,
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  albertomailcom: {
    flex: 1,
  },
  inputArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.ghostwhite,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    width: 313,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
  },
  time: {
    fontSize: 16,
    fontWeight: "500",
    color: Color.darkorange,
  },
  messageButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  newChat: {
    borderRadius: 30,
    backgroundColor: Color.white,
    paddingHorizontal: 26,
    paddingVertical: 27,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
  },
});

export default NewChat;
