import React from 'react';
import { View, StyleSheet } from 'react-native';

const Circle = ({color, size}) => {

  const styles = StyleSheet.create({
    circle: {
      width: size || 20,
      height: size || 20,
      borderRadius: size || 20 * 2,
      backgroundColor: color || 'orange',
    },
  });

  return (    
    <View style={styles.circle} />
  );
};


export default Circle;
