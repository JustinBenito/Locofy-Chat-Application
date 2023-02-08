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
import NewChat from "../components/NewChat";
import ChatContainer from "../components/ChatContainer";
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ChatView = () => {
  const [buttonIconVisible, setButtonIconVisible] = useState(false);

  const openButtonIcon = useCallback(() => {
    setButtonIconVisible(true);
  }, []);

  const closeButtonIcon = useCallback(() => {
    setButtonIconVisible(false);
  }, []);
  return (
    <>
      <SafeAreaView style={styles.chatView}>
        <View style={styles.topHeader}>
          <View style={styles.header}>
            <Pressable style={styles.button} onPress={openButtonIcon}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/button.png")}
              />
            </Pressable>
            <Text style={styles.chats}>Chats</Text>
            <Image
              style={styles.button}
              resizeMode="cover"
              source={require("../assets/profile1.png")}
            />
          </View>
        </View>
        <ScrollView
          style={[styles.chatlist, styles.mt19]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.chatListScrollViewContent}
        >
          <ChatContainer
            profileImageUrl={require("../assets/profileimage.png")}
            profileName="Alberto Moedano"
            messageText="Hey man what’s up?"
          />
          <ChatContainer
            profileImageUrl={require("../assets/profileimage1.png")}
            profileName="Celso Thorn"
            messageText="remember to turn in the assignment!"
            propMarginTop={6}
            propDisplay="none"
          />
          <ChatContainer
            profileImageUrl={require("../assets/profileimage3.png")}
            profileName="Jarrett Capela"
            messageText="wow that’s awesome"
            propMarginTop={6}
            propDisplay="none"
          />
          <ChatContainer
            profileImageUrl={require("../assets/profileimage7.png")}
            profileName="Moana Garber"
            messageText="Burhan was looking for you"
            propMarginTop={6}
            propDisplay="none"
          />
          <ChatContainer
            profileImageUrl={require("../assets/profileimage2.png")}
            profileName="Burhan Solo"
            messageText="you there? need some help"
            propMarginTop={6}
            propDisplay="none"
          />
          <ChatContainer
            profileImageUrl={require("../assets/profileimage4.png")}
            profileName="Cassandra Smith"
            messageText="take care :)"
            propMarginTop={6}
            propDisplay="none"
          />
          <ChatContainer
            profileImageUrl={require("../assets/profileimage5.png")}
            profileName="Meredith Mitchell"
            messageText="let’s hang sometime soon!"
            propMarginTop={6}
            propDisplay="none"
          />
          <ChatContainer
            profileImageUrl={require("../assets/profileimage6.png")}
            profileName="Ruben Kishimoto"
            messageText="WOW"
            propMarginTop={6}
            propDisplay="none"
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
  chatListScrollViewContent: {
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
  chats: {
    fontSize: FontSize.size_2xl,
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
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
  chatlist: {
    alignSelf: "stretch",
    flex: 1,
  },
  chatView: {
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ChatView;
