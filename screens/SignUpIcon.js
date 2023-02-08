import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SignUpCard from "../components/SignUpCard";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUpIcon = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onHandleSignin = () => {
    if (email !== '' && password !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log('Signin success');
          navigation.navigate('BottomTabsRoot', { screen: 'ChatView' });
          
        })
        .catch(err => console.log(`Login err: ${err}`));
    }
  };


  return (
    <ImageBackground
      style={styles.signUpIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <View style={[styles.login, styles.loginFlexBox]}>
        <SignUpCard email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
        <View style={[styles.loginFlexBox, styles.mt78]}>
          <LinearGradient
            style={styles.button}
            locations={[0.01, 1]}
            colors={["#ffa925", "#ff7841"]}
          >
            <TouchableOpacity
              style={[styles.touchableopacity, styles.promptFlexBox]}
              activeOpacity={0.2}
              onPress={() => {
                onHandleSignin()
                // navigation.navigate("BottomTabsRoot", { screen: "ContactView" })
              }
              }
            >
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={[styles.promptFlexBox, styles.mt20]}>
            <Text style={styles.loginHere1Typo}>
              <Text style={styles.doYouHave}>Do you have an account?</Text>
              {` `}
            </Text>
            <Pressable
              style={styles.ml5}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles.loginHere1, styles.loginHere1Typo]}>
                Login here
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: Margin.m_4xs,
  },
  mt20: {
    marginTop: Margin.m_lg,
  },
  mt78: {
    marginTop: Margin.m_5xl,
  },
  loginFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  promptFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  loginHere1Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  signUp: {
    fontSize: FontSize.size_2xl,
    color: Color.gray50,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  touchableopacity: {
    borderRadius: Border.br_sm,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xl,
    backgroundColor: "transparent",
    width: "100%",
    flexDirection: "row",
  },
  button: {
    width: 317,
  },
  doYouHave: {
    color: Color.gray_200,
  },
  loginHere1: {
    color: Color.darkorange,
  },
  login: {
    borderTopLeftRadius: Border.br_xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_6xl,
  },
  signUpIcon: {
    flex: 1,
    height: 812,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
});

export default SignUpIcon;
