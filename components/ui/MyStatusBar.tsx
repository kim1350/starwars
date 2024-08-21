import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import type {StatusBarStyle} from 'react-native';
type Props = PropsWithChildren<{
  colorStatus: string;
  barStyleT: StatusBarStyle;
}>;

const MyStatusBar = ({colorStatus, barStyleT}: Props): JSX.Element => {
  return (
    <View style={[styles.statusBar, {backgroundColor: colorStatus}]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={barStyleT}
        />
      </SafeAreaView>
    </View>
  );
};

export default MyStatusBar;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
