const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SignUpIcon from "./screens/SignUpIcon";
import ChatRoom from "./screens/ChatRoom";
import ContactView from "./screens/ContactView";
import ChatView from "./screens/ChatView";
import LoginIcon from "./screens/LoginIcon";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";
import Chats1 from "./components/Chats1";
import Chats from "./components/Chats";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const AuthenticatedUserContext = React.createContext({
  user: '',
  setUser: () => { },
});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};


const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([<Contact />, <Chats />]);
  const [bottomTabItemsActive] = React.useState([<Contacts />, <Chats1 />]);

  return (
    <Tab.Navigator

      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <SafeAreaView>
            <View
              style={{
                alignSelf: "stretch",
                backgroundColor: "#fff",
                flexDirection: "row",
                paddingHorizontal: 60,
                paddingVertical: 15,
                alignItems: "center",
                justifyContent: "space-between",
                height: 69.00003051757812,
              }}
            >
              {bottomTabItemsNormal.map((item, index) => {
                const isFocused = state.index === index;
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      navigation.navigate({
                        name: state.routes[index].name,
                        merge: true,
                      });
                    }}
                  >
                    {activeIndex === index
                      ? bottomTabItemsActive[index] || item
                      : item}
                  </Pressable>
                );
              })}
            </View>
          </SafeAreaView>
        );
      }}
    >
      <Tab.Screen
        name="ContactView"
        component={ContactView}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ChatView"
        component={ChatView}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Roboto_Medium: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto_Bold: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  const { user, setUser } = React.useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const unsubscribeAuth = onAuthStateChanged(
    auth,
    async authenticatedUser => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setIsLoading(false);
    }
  );
  console.log('unsubscribeAuth', unsubscribeAuth)
  console.log('user', user)
  React.useEffect(() => {

    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    console.log('unsubscribeAuth', unsubscribeAuth)
    console.log('user', user)
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <AuthenticatedUserProvider>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName={user ? "ChatView" : "Login"}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="SignUp"
                component={SignUpIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChatRoom"
                component={ChatRoom}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={LoginIcon}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </AuthenticatedUserProvider>
    </>
  );
};
export default App;
