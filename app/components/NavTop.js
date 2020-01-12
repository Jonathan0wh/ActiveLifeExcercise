/* libs */
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

/* styles */
import { DIVIDER } from '../styles/colors';

import { STATUS_BAR_HEIGHT, PAGE_PADDING } from '../styles/spacing';

const styles = StyleSheet.create({
  navTop: {
    paddingVertical: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PAGE_PADDING,
    justifyContent: 'space-between',
    marginTop: Platform.select({
      ios: STATUS_BAR_HEIGHT,
      android: 0
    })
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: DIVIDER
  },
  noPadding: {
    paddingBottom: 0
  },
  negativePadding: {
    marginTop: 10,
    paddingBottom: 12
  },
  noStatusBarHeight: {
    marginTop: 0
  }
});

const NavTop = ({
  children,
  showUnderline,
  style,
  noPadding,
  negativePadding,
  noStatusBarHeight
}) => {
  return (
    <View
      style={[
        styles.navTop,
        style,
        showUnderline && styles.underline,
        negativePadding && styles.negativePadding,
        noPadding && styles.noPadding,
        noStatusBarHeight && styles.noStatusBarHeight
      ]}
    >
      {children}
    </View>
  );
};

NavTop.propTypes = {
  showUnderline: PropTypes.bool,
  noPadding: PropTypes.bool,
  negativePadding: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ])
};

export default NavTop;
