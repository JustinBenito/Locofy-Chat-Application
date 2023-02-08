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
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ContactContainer = ({
  authorImageUrl,
  authorName,
  propMarginTop,
  onContactPress,
}) => {
  const contactStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <TouchableOpacity
      style={[styles.contact, styles.contactFlexBox, contactStyle]}
      activeOpacity={0.2}
      onPress={onContactPress}
    >
      <View style={styles.contactFlexBox}>
        <Image
          style={styles.profileimageIcon}
          resizeMode="cover"
          source={authorImageUrl}
        />
        <View style={styles.ml12}>
          <Text style={styles.name}>{authorName}</Text>
          <Text style={[styles.preview, styles.mt4, styles.timeTypo]}>
            last seen recently
          </Text>
        </View>
      </View>
      <Text style={[styles.time, styles.timeTypo]}>Message</Text>
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
  contactFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  timeTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  profileimageIcon: {
    width: 42,
    height: 42,
  },
  name: {
    fontSize: FontSize.size_xl,
    color: Color.gray_200,
    width: 155,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  preview: {
    color: Color.silver,
    textAlign: "left",
  },
  time: {
    color: Color.darkorange,
    textAlign: "center",
    width: 48,
  },
  contact: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_8xs,
    justifyContent: "space-between",
  },
});

export default ContactContainer;
