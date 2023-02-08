import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as React from "react";
import { Text, StyleSheet, Image, TextInput, View, Pressable } from "react-native";
import {
  Margin,
  Color,
  FontFamily,
  Padding,
  Border,
  FontSize,
} from "../GlobalStyles";

const LoginForm = (props) => {
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');


  return (
    <View style={styles.logInParent}>
      <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
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
        <View style={[styles.passwordSection, styles.mt24]}>
          <View style={[styles.passwordInput, styles.inputShadowBox]}>
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame1.png")}
              />
              <TextInput
                onChangeText={e => props.setPassword(e)}
                value={props.password}
                style={[styles.albertomailcom, styles.ml22]}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry
                placeholderTextColor="#a4a4a4"
              />
            </View>
          </View>
          <Text style={[styles.forgotPassword, styles.mt6, styles.logInTypo]}>
            Forgot password
          </Text>

        </View>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml22: {
    marginLeft: Margin.m_xl,
  },
  mt6: {
    marginTop: Margin.m_3xs,
  },
  mt24: {
    marginTop: Margin.m_2xl,
  },
  mt69: {
    marginTop: Margin.m_4xl,
  },
  logInTypo: {
    textAlign: "center",
    color: Color.darkorange,
    fontFamily: FontFamily.roboto,
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
  logIn: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
  },
  frameIcon: {
    width: 24,
    overflow: "hidden",
    height: 24,
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
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    paddingVertical: Padding.p_2xl,
  },
  forgotPassword: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
  },
  passwordSection: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  form: {
    width: 313,
  },
  logInParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default LoginForm;
