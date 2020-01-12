/* libs */
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import PropTypes from 'prop-types';

/* components */
import NavTop from './NavTop';
import Text from './Text';
import { Icon } from './Arrow';

/* styles */
import appStyles from '../styles/global';
import { MEDIUM } from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 2
  },
  headerText: {
    fontFamily: 'CircularStd-Bold'
  },
  empty: {
    width: 15
  }
});

export default class Page extends Component {
  state = {
    showUnderline: this.props.showUnderline
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    const { startAtBottom } = this.props;
    if (startAtBottom) {
      this.refs.scrollView.scrollToEnd({ animated: false });
    }
  };

  onScroll = ({ nativeEvent }) => {
    const {
      contentOffset: { y }
    } = nativeEvent;
    this.setState({ showUnderline: y >= this.props.lineOffset });
  };

  render() {
    const {
      goBack,
      style,
      title,
      titleStyle,
      children,
      scrollViewProps,
      leftIcon,
      noLeft
    } = this.props;
    const { showUnderline } = this.state;

    return (
      <View style={[appStyles.fullWidthContainer, styles.container, style]}>
        <NavTop showUnderline={showUnderline}>
          {leftIcon && (
            <Icon name={leftIcon} whenPushed={goBack} color={MEDIUM} />
          )}
          {!leftIcon && <View style={styles.empty} />}
          <Text
            bold
            extraStyles={[styles.headerText, titleStyle]}
            textProps={{
              numberOfLines: 1
            }}
          >
            {title}
          </Text>
          <View style={styles.empty} />
        </NavTop>
        <ScrollView
          ref="scrollView"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={this.onScroll}
          onContentSizeChange={this.onContentSizeChange}
          {...scrollViewProps}
        >
          {children}
        </ScrollView>
      </View>
    );
  }
}

Page.propTypes = {
  goBack: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  children: PropTypes.any,
  scrollViewProps: PropTypes.any,
  leftIcon: PropTypes.string
};

Page.defaultProps = {
  goBack: () => {},
  lineOffset: 10,
  showUnderline: false
};
