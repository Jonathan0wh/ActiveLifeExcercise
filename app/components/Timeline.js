import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Text from './Text';

/* styles */
import appStyles from '../styles/global';
import { TIMELINE } from '../styles/colors';

const styles = StyleSheet.create({
  childrenContainer: {
    padding: 10
  },
  lineContainer: {
    alignItems: 'center',
    width: 10
  },
  spaceLeft: {
    marginLeft: 12
  },
  rowCenter: {
    alignItems: 'center'
  },
  line: {
    width: 1,
    backgroundColor: TIMELINE,
    height: 100
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: TIMELINE
  },
  title: {
    fontSize: 17
  }
});

class Timeline extends Component {
  state = {
    lineHeight: 0,
    calculated: false
  };

  onLayout = event => {
    if (!this.state.calculated) {
      this.setState({
        lineHeight: event.nativeEvent.layout.height,
        calculated: true
      });
    }
  };

  render() {
    const { children, title } = this.props;
    const { lineHeight } = this.state;
    return (
      <View>
        <View style={[appStyles.rowLeftJustified, styles.rowCenter]}>
          <View style={styles.circle} />
          <View style={styles.spaceLeft}>
            <Text bold style={styles.title}>
              {title}
            </Text>
          </View>
        </View>

        <View style={appStyles.rowLeftJustified}>
          <View style={styles.lineContainer}>
            <View style={[styles.line, { height: lineHeight }]} />
          </View>
          <View style={styles.childrenContainer} onLayout={this.onLayout}>
            {children}
          </View>
        </View>
      </View>
    );
  }
}

Timeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  title: PropTypes.string
};

export default Timeline;
