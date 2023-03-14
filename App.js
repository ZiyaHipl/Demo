import React from 'react';
import { StyleSheet, View, } from 'react-native';
import LoginNavigator from './Src/Navigation/LoginNavigator'
import ActivityIndicatorApp from './Src/Component/Lib/ActivityIndicatorApp';
import Helper from './Src/Component/Lib/Helper';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true
    return (
      <View style={{ flex: 1, }}>
        <LoginNavigator />
        <ActivityIndicatorApp
          onRef={ref => { Helper.globalLoader = ref }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

});