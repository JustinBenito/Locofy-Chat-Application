import * as React from "react";
import { useState, useCallback } from "react";
import {
  SafeAreaView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NewChat from "../components/NewChat";
import ContactContainer from "../components/ContactContainer";
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ContactView = () => {
  const navigation = useNavigation();
  const [buttonIconVisible, setButtonIconVisible] = useState(false);

  const openButtonIcon = useCallback(() => {
    setButtonIconVisible(true);
  }, []);

  const closeButtonIcon = useCallback(() => {
    setButtonIconVisible(false);
  }, []);
  return (
    <>
      <SafeAreaView style={styles.contactView}>
        <View style={styles.topHeader}>
          <View style={styles.header}>
            <Pressable style={styles.button} onPress={openButtonIcon}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/button.png")}
              />
            </Pressable>
            <Text style={styles.contacts}>Contacts</Text>
            <Image
              style={styles.button}
              resizeMode="cover"
              source={require("../assets/profile1.png")}
            />
          </View>
        </View>
        <ScrollView
          style={[styles.contactlist, styles.mt19]}
          contentContainerStyle={styles.contactListScrollViewContent}
        >
          <ContactContainer
            authorImageUrl={require("../assets/profileimage.png")}
            authorName="Alberto Moedano"
            onContactPress={() => navigation.navigate("ChatRoom")}
          />
          <ContactContainer
            authorImageUrl={require("../assets/profileimage1.png")}
            authorName="Celso Thorn"
            propMarginTop={6}
            onContactPress={() => navigation.navigate("ChatRoom")}
          />
          <ContactContainer
            authorImageUrl={require("../assets/profileimage2.png")}
            authorName="Burhan Solo"
            propMarginTop={6}
            onContactPress={() => navigation.navigate("ChatRoom")}
          />
          <ContactContainer
            authorImageUrl={require("../assets/profileimage3.png")}
            authorName="Jarrett Capela"
            propMarginTop={6}
            onContactPress={() => navigation.navigate("ChatRoom")}
          />
          <ContactContainer
            authorImageUrl={require("../assets/profileimage4.png")}
            authorName="Cassandra Smith"
            propMarginTop={6}
            onContactPress={() => navigation.navigate("ChatRoom")}
          />
          <ContactContainer
            authorImageUrl={require("../assets/profileimage5.png")}
            authorName="Meredith Mitchell"
            propMarginTop={6}
            onContactPress={() => navigation.navigate("ChatRoom")}
          />
          <ContactContainer
            authorImageUrl={require("../assets/profileimage6.png")}
            authorName="Ruben Kishimoto"
            propMarginTop={6}
            onContactPress={() => navigation.navigate("ChatRoom")}
          />
          <ContactContainer
            authorImageUrl={require("../assets/profileimage7.png")}
            authorName="Moana Garber"
            propMarginTop={6}
            onContactPress={() => navigation.navigate("ChatRoom")}
          />
        </ScrollView>
      </SafeAreaView>

      <Modal animationType="fade" transparent visible={buttonIconVisible}>
        <View style={styles.buttonIconOverlay}>
          <Pressable style={styles.buttonIconBg} onPress={closeButtonIcon} />
          <NewChat onClose={closeButtonIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: Margin.m_3xs,
  },
  contactListScrollViewContent: {
    flexDirection: "column",
  },
  mt7: {
    marginTop: Margin.m_2xs,
  },
  mt19: {
    marginTop: Margin.m_md,
  },
  buttonIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  button: {
    width: 38,
    height: 38,
  },
  contacts: {
    fontSize: FontSize.size_2xl,
    fontWeight: 'bold',
    fontFamily: FontFamily.roboto_bold,
    color: Color.gray_200,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 84,
    alignItems: "center",
  },
  header: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_4xs,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  topHeader: {
    alignSelf: "stretch",
  },
  contactlist: {
    alignSelf: "stretch",
    flex: 1,
  },
  contactView: {
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ContactView;
