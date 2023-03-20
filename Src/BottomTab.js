import React from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Home2 from "./Home2";
import img from './assest/img'

const Tab = createBottomTabNavigator();
const DeviceW = Dimensions.get("screen").width;
const RenderTabIcons = (props) => {
  const { icon, label, isFocused, backgroundColor } = props;
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: DeviceW / 4,
        height: 70,
        marginTop: 13,
        backgroundColor: backgroundColor,
      }}
    >
      <Image
        source={icon}
        style={{ height: 20, width: 20, resizeMode: "contain" }}
      />
      <Text
        style={[
          styles.labelText,
          { color: isFocused ? 'red' : '#000' },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};
const HomeNavigator = createNativeStackNavigator();
function stackNavigatorHome() {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen name="Home" component={Home} options={{ headerShown: false, }} />
    </HomeNavigator.Navigator>
  );
}
const OrdersNavigator = createNativeStackNavigator();
function stackNavigatorOrders() {
  return (
    <OrdersNavigator.Navigator>
      <OrdersNavigator.Screen name="Home2" component={Home2} options={{ headerShown: false }} />
    </OrdersNavigator.Navigator>
  );
}
const AdddFevNavigator = createNativeStackNavigator();
function stackNavigatorAdddFev() {
  return (
    <AdddFevNavigator.Navigator>
      <AdddFevNavigator.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </AdddFevNavigator.Navigator>
  );
}
const AccountNavigator = createNativeStackNavigator();
function stackNavigatorAccount() {
  return (
    <AccountNavigator.Navigator>
      <AccountNavigator.Screen name="Home2" component={Home2} options={{ headerShown: false }} />
    </AccountNavigator.Navigator>
  );
}

export default class ActiveTabs extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            style: {
              height: 50,
            },
          }}
        >
          <Tab.Screen
            name="Active"
            component={stackNavigatorHome}
            options={{
              headerShown: false,
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => {
                return (
                  <RenderTabIcons
                    icon={focused ? img.home : img.home_gray}
                    label={"Home"}
                    isFocused={focused}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Orders"
            component={stackNavigatorOrders}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => {
                return (
                  <RenderTabIcons
                    icon={focused ? img.orders : img.orders_gray}
                    label={"Orders"}
                    isFocused={focused}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Earnings"
            component={stackNavigatorAdddFev}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => {
                return (
                  <RenderTabIcons
                    icon={
                      focused ? img.subscription : img.subscription_gray
                    }
                    label={"Subscription"}
                    isFocused={focused}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="account"
            component={stackNavigatorAccount}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => {
                return (
                  <RenderTabIcons
                    icon={focused ? img.account : img.account_gray}
                    label={"Account"}
                    isFocused={focused}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  labelText: {
    fontSize: 12,
  },
});
