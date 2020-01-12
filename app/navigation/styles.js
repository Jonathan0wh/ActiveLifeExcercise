import { Dimensions, Platform, PixelRatio } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import { MAIN_COLOR, DIVIDER } from '../styles/colors';

const { width } = Dimensions.get('window');

// decide on label fontSize
let fontSize = 0;
if (width < 375) {
  fontSize = 7 / PixelRatio.getFontScale();
} else if (Platform.OS === 'android') {
  fontSize = 10.8 / PixelRatio.getFontScale();
} else {
  fontSize = 8 / PixelRatio.getFontScale();
}

const navigationStyles = {
  noHeader: {
    headerMode: 'none'
  },
  modal: {
    headerMode: 'none',
    mode: 'modal'
  },
  stackSwipeBack: {
    headerMode: 'none',
    navigationOptions: {
      gestureResponseDistance: {
        horizontal: width / 2
      }
    }
  },
  stackNoSwipe: {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  hideTabBar: {
    navigationOptions: {
      tabBarVisible: false
    }
  },
  tabBar: {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: MAIN_COLOR,
      inactiveTintColor: 'black',
      pressColor: MAIN_COLOR,
      showIcon: true,
      labelStyle: {
        letterSpacing: 0.5,
        fontSize: fontSize,
        fontWeight: 'bold',
        minWidth: '100%',
        marginBottom: Platform.OS === 'android' ? 0 : 5,
        ...ifIphoneX(
          {
            marginTop: -10
          },
          {
            marginTop: Platform.OS === 'android' ? 5 : 0
          }
        )
      },
      style: {
        backgroundColor: 'white',
        borderTopColor: DIVIDER,
        height: 60,
        paddingHorizontal: 10,
        paddingVertical: 5
      },
      indicatorStyle: {
        backgroundColor: 'transparent'
      }
    }
  }
};

export default navigationStyles;
