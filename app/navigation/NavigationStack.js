/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import styles from './styles';
import appStyles from '@styles/global';

import Challenges from '../screens/challenges';
import Rewards from '../screens/rewards';
import Settings from '../screens/settings';
import Track from '../screens/track';
import Balance from '../screens/balance';
import PastChallenges from '../screens/challenges/PastChallenges';
import { STRINGS } from '@localization/Strings';
import images from '@styles/images';

const tabNavigationOptions = (tabName, style) => ({
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={images[tabName]}
      style={[appStyles.tabNavIcon, { tintColor }, style]}
    />
  ),
  gesturesEnabled: false,
  header: null
});

const challengesStackNavigator = StackNavigator(
  {
    Challenges: { screen: Challenges },
    PastChallenges: { screen: PastChallenges }
  },
  styles.stackSwipeBack
);

const appNavigation = TabNavigator(
  {
    [STRINGS.TrackTitle.toUpperCase()]: {
      screen: Track,
      navigationOptions: tabNavigationOptions('activity')
    },
    [STRINGS.MyBalanceTitle.toUpperCase()]: {
      screen: Balance,
      navigationOptions: tabNavigationOptions('balance')
    },
    [STRINGS.RewardsTitle.toUpperCase()]: {
      screen: Rewards,
      navigationOptions: tabNavigationOptions('offers', {
        width: 21,
        height: 22
      })
    },
    [STRINGS.ChallengesTitle.toUpperCase()]: {
      screen: challengesStackNavigator,
      navigationOptions: tabNavigationOptions('challenges')
    },
    [STRINGS.SettingsTitle.toUpperCase()]: {
      screen: Settings,
      navigationOptions: tabNavigationOptions('settings')
    }
  },
  styles.tabBar
);

export default appNavigation;
