import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ChatContainer = ({
  profileImageUrl,
  profileName,
  messageText,
  propMarginTop,
  propDisplay,
}) => {
  const chatStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const notificationStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
    };
  }, [propDisplay]);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.chat, styles.chatFlexBox, chatStyle]}
      activeOpacity={0.2}
      onPress={() => navigation.navigate("ChatRoom")}
    >
      <View style={[styles.profile, styles.chatFlexBox]}>
        <Image
          style={styles.profileimageIcon}
          resizeMode="cover"
          source={profileImageUrl}
        />
        <View style={[styles.chat1, styles.ml12]}>
          <Text style={styles.name}>{profileName}</Text>
          <Text style={[styles.preview, styles.mt4]}>{messageText}</Text>
        </View>
      </View>
      <View style={[styles.details, styles.ml10]}>
        <Text style={[styles.time, styles.timeTypo]}>2 min ago</Text>
        <LinearGradient
          style={[styles.notification, styles.mt4, notificationStyle]}
          locations={[0, 1]}
          colors={["#ffa925", "#ff7841"]}
        >
          <Text style={[styles.text, styles.timeTypo]}>1</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml12: {
    marginLeft: Margin.m_sm,
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  chatFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto_medium,
    fontWeight: "500",
  },
  profileimageIcon: {
    width: 42,
    height: 42,
  },
  name: {
    fontSize: FontSize.size_xl,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  preview: {
    color: Color.darkorange,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  chat1: {
    flex: 1,
  },
  profile: {
    flex: 1,
    alignItems: "center",
  },
  time: {
    color: Color.gray300,
  },
  text: {
    color: Color.gray50,
  },
  notification: {
    borderRadius: Border.br_lg,
    width: 16,
    height: 16,
    overflow: "hidden",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
  },
  details: {
    alignItems: "flex-end",
  },
  chat: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_2xl,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default ChatContainer;
