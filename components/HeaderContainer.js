import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  Border,
  FontFamily,
  Padding,
  FontSize,
} from "../GlobalStyles";

const HeaderContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.topHeader}>
      <View style={styles.backButtonParent}>
        <Pressable
          style={[styles.backButton, styles.callBg]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={styles.user}>
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={require("../assets/profile.png")}
          />
          <View style={styles.ml20}>
            <Text style={[styles.albertoMoedano, styles.onlineNowTypo]}>
              Alberto Moedano
            </Text>
            <Text style={[styles.onlineNow, styles.mt4, styles.onlineNowTypo]}>
              Online now
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={[styles.video, styles.callBg]}>
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.call, styles.ml6, styles.callBg]}>
            <Image
              style={styles.vectorIcon2}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml20: {
    marginLeft: Margin.m_lg,
  },
  ml6: {
    marginLeft: Margin.m_3xs,
  },
  callBg: {
    backgroundColor: Color.gray50,
    borderRadius: Border.br_xs,
  },
  onlineNowTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  vectorIcon: {
    width: 10,
    height: 17,
  },
  backButton: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  profileIcon: {
    width: 38,
    height: 38,
  },
  albertoMoedano: {
    fontSize: FontSize.size_xl,
    color: Color.gray_200,
    width: 119,
  },
  onlineNow: {
    fontSize: FontSize.size_base,
    color: Color.darkorange,
  },
  user: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon1: {
    height: 12,
    width: 16,
  },
  video: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xs,
  },
  vectorIcon2: {
    height: 16,
    width: 16,
  },
  call: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  buttons: {
    flexDirection: "row",
  },
  backButtonParent: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  topHeader: {
    alignSelf: "stretch",
  },
});

export default HeaderContainer;
