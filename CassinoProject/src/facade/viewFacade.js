// ViewFacade.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ViewFacade {
  static renderTextView(text) {
    return (
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    );
  }

  static renderCustomView(component) {
    return (
      <View style={styles.container}>
        {component}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
