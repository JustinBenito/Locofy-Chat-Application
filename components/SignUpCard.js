import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import * as React from "react";
import { Text, StyleSheet, Image, TextInput, View } from "react-native";
import {
  Margin,
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const SignUpCard = (props) => {

  // React.useEffect(() => {
  //   console.log(email)
  // }, [email])
  return (
    <View style={styles.signUpParent}>
      <Text style={styles.signUp}>Sign Up</Text>
      <View style={[styles.form, styles.mt69]}>
        <View style={[styles.emailInput, styles.inputShadowBox]}>
          <View style={styles.frameParent}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
            <TextInput

              style={[styles.albertomailcom, styles.ml22]}
              placeholder="Email Address"
              keyboardType="default"

              onChangeText={e => props.setEmail(e)}
              value={props.email}
              placeholderTextColor="#a4a4a4"
            />
          </View>
        </View>
        <View
          style={[styles.passwordInput, styles.mt24, styles.inputShadowBox]}
        >
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame1.png")}
            />
            <TextInput
              style={[styles.albertomailcom, styles.ml22]}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry
              onChangeText={e => props.setPassword(e)}
              value={props.password}
              placeholderTextColor="#a4a4a4"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml22: {
    marginLeft: Margin.m_xl,
  },
  mt24: {
    marginTop: Margin.m_2xl,
  },
  mt69: {
    marginTop: Margin.m_4xl,
  },
  inputShadowBox: {
    paddingHorizontal: Padding.p_3xl,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_sm,
    alignSelf: "stretch",
  },
  signUp: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
    color: Color.darkorange,
    textAlign: "center",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  albertomailcom: {
    flex: 1,
  },
  frameParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  emailInput: {
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
  },
  frameGroup: {
    width: 273,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    paddingVertical: Padding.p_2xl,
  },
  form: {
    width: 313,
  },
  signUpParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default SignUpCard;
