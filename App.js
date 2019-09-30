import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Video from "react-native-video";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App