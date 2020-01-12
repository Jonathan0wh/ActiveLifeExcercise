/* libs */
import React from 'react';
import { StyleSheet, View } from 'react-native';

/* styles */
import { DIVIDER } from '@styles/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 22
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER
  }
});

const Divider = ({ paddingVertical }) => {
  return (
    <View style={[styles.container, paddingVertical && { paddingVertical }]}>
      <View style={styles.divider} />
    </View>
  );
};

export default Divider;
