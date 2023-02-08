import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
} from "react-native";
import HeaderContainer from "../components/HeaderContainer";
import {
  Margin,
  Padding,
  Border,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

import { GiftedChat } from 'react-native-gifted-chat'
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';

import { auth, database } from '../firebase';

const ChatRoom = () => {
  const [messages, setMessages] = React.useState([]);
  React.useEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      );
    });

    return () => unsubscribe();
  }, []);


  const onSend = (messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    console.log(text)
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user
    }).catch(e => console.error(e));
  }
  return (
    <SafeAreaView style={styles.chatRoom}>
      <HeaderContainer />
      {/* <ScrollView
        style={[styles.chatSection, styles.chatFlexBox]}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chatSectionScrollViewContent}
      >
        <View style={[styles.chatBubbles, styles.chatFlexBox]}>
          <View
            style={[
              styles.bubbleMessage,
              styles.messageFlexBox,
              styles.bubblePosition,
            ]}
          >
            <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
              Lssorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
          <View
            style={[
              styles.bubbleMessage1,
              styles.messageFlexBox,
              styles.bubblePosition,
            ]}
          >
            <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
          <View
            style={[
              styles.bubbleMessage2,
              styles.messageFlexBox,
              styles.bubblePosition,
            ]}
          >
            <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
          <View style={[styles.bubbleMessage3, styles.bubbleFlexBox]}>
            <Text style={[styles.loremIpsumDolor3, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
          <View style={[styles.bubbleMessage4, styles.bubbleFlexBox]}>
            <Text style={[styles.loremIpsumDolor3, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
        </View>

      </ScrollView> */}

      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email,
          avatar: 'https://i.pravatar.cc/300'
        }}
      />
      {/* <View
        style={[
          styles.messageArea,
          styles.messageFlexBox,
          styles.buttonFlexBox,
        ]}
      >
        <TextInput
          style={styles.typeSomething}
          placeholder="Type something.."
          keyboardType="default"
          placeholderTextColor="#262626"
        />
        <View
          style={[
            styles.button,
            styles.ml10,
            styles.messageFlexBox,
            styles.buttonFlexBox,
          ]}
        >
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"

            source={require("../assets/vector3.png")}
          />
        </View>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatSectionScrollViewContent: {
    flexDirection: "column",
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  chatFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  messageFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bubblePosition: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_lg,
    borderRadius: Border.br_md,
    left: "50%",
    top: "50%",
    marginLeft: -167,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.gray100,
  },
  loremTypo: {
    width: 152,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  bubbleFlexBox: {
    backgroundColor: Color.darkorange,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_lg,
    flexDirection: "row",
    borderRadius: Border.br_md,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  loremIpsumDolor: {
    color: Color.gray_200,
  },
  bubbleMessage: {
    marginTop: -302.43,
  },
  bubbleMessage1: {
    marginTop: -150.43,
  },
  bubbleMessage2: {
    marginTop: -74.43,
  },
  loremIpsumDolor3: {
    color: Color.white,
  },
  bubbleMessage3: {
    marginTop: -226.43,
    marginLeft: -16,
  },
  bubbleMessage4: {
    marginTop: 1.57,
    marginLeft: -13,
  },
  chatBubbles: {
    height: 676,
  },
  chatSection: {
    flex: 1,
  },
  typeSomething: {
    flex: 1,
  },
  vectorIcon: {
    width: 12,
    height: 19,
  },
  button: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.gray100,
    alignItems: "center",
    flexDirection: "row",
  },
  messageArea: {
    backgroundColor: Color.gray50,
    paddingHorizontal: Padding.p_md,
    paddingVertical: 21,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  chatRoom: {
    backgroundColor: Color.white,
    width: "100%",
    height: 812,
    flex: 1,
  },
});

export default ChatRoom;
