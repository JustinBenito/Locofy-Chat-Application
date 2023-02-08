import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../components/LoginForm";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginIcon = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onHandleLogin = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log('Login success');
          navigation.navigate('BottomTabsRoot', { screen: 'ChatView' });

        })
        .catch(err => console.log(`Login err: ${err}`));
    }
  };


  return (
    <ImageBackground
      style={styles.loginIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <View style={[styles.login, styles.loginFlexBox]}>
        <LoginForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
        <View style={[styles.loginFlexBox, styles.mt78]}>
          <LinearGradient
            style={styles.button}
            locations={[0, 0.99]}
            colors={["#ffa925", "#ff7841"]}
          >
            <Pressable
              style={[styles.pressable, styles.promptFlexBox]}
              onPress={() => {
                onHandleLogin()
                //  navigation.navigate("BottomTabsRoot", { screen: "ContactView" })
              }
              }
            >
              <Text style={styles.login1}>Login</Text>
            </Pressable>
          </LinearGradient>
          <View style={[styles.promptFlexBox, styles.mt20]}>
            <Text style={[styles.dontHaveAn, styles.textTypo]}>
              Don’t have an account?
            </Text>
            <Pressable
              style={styles.ml5}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.textTypo}>
                {` `}
                <Text style={styles.signUpHere}>Sign up here</Text>
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
  textTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  login1: {
    fontSize: FontSize.size_2xl,
    color: Color.gray50,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  pressable: {
    borderRadius: Border.br_sm,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xl,
    backgroundColor: "transparent",
    width: "100%",
    flexDirection: "row",
  },
  button: {
    width: 317,
    borderRadius: 20
  },
  dontHaveAn: {
    color: Color.gray_200,
  },
  signUpHere: {
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
  loginIcon: {
    flex: 1,
    height: 812,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
});

export default LoginIcon;
