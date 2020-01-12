import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';

import Text from '@components/Text';
import images from '@styles/images';

import {
  WHITE,
  DARK,
  LIGHT_GREY,
  DARK_GREY,
  DIVIDER,
  MAIN_COLOR,
  UNFILLED_PROGRESS_GREY
} from '@styles/colors';

const ChallengeCard = ({
  imageSource,
  title,
  date,
  completed,
  type,
  activeScore,
  activeScoregoal,
  rank,
  participants
}) => (
  <View style={styles.cardContainerStyle}>
    <View style={styles.cardStyle}>
      <Image source={{ uri: imageSource }} style={styles.imageStyle} />

      <View style={styles.detailContainerStyle}>
        <View style={styles.rowStyle}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <Text style={styles.smallTextStyle} color={LIGHT_GREY}>
            {date}
          </Text>
        </View>
        <View style={styles.rowStyle}>
          {type === 'timer' ? (
            <Text style={styles.smallTextStyle} color={LIGHT_GREY}>
              <Text style={styles.smallTextStyle} color={DARK_GREY}>
                {activeScore}
              </Text>{' '}
              / {activeScoregoal}
            </Text>
          ) : (
            <Text style={styles.smallTextStyle} color={LIGHT_GREY}>
              <Text style={styles.smallTextStyle} color={DARK_GREY}>
                #{rank}
              </Text>{' '}
              / {participants}
            </Text>
          )}
          {completed ? (
            type === 'timer' ? (
              <Image
                source={images.tickCompleted}
                style={styles.completeIconStyle}
              />
            ) : (
              <Image
                source={images.starLighted}
                style={styles.completeIconStyle}
              />
            )
          ) : (
            <View style={styles.notCompletedIconBgStyle}>
              <Image
                source={images.cross}
                style={styles.notCompletedIconStyle}
              />
            </View>
          )}
        </View>
        {type === 'timer' && (
          <View style={styles.progressBarStyle}>
            <Progress.Bar
              height={4.5}
              width={220.5}
              borderRadius={15}
              borderWidth={0}
              color={MAIN_COLOR}
              unfilledColor={UNFILLED_PROGRESS_GREY}
              progress={
                activeScore / activeScoregoal > 1
                  ? 1
                  : activeScore / activeScoregoal
              }
            />
          </View>
        )}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardContainerStyle: {
    marginBottom: 15,
    shadowColor: DARK,
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5
  },
  cardStyle: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    overflow: 'hidden',
    width: 315,
    height: 90,
    borderWidth: 0.5,
    borderColor: DIVIDER,
    borderRadius: 4
  },
  imageStyle: {
    width: 65,
    height: 90
  },
  detailContainerStyle: {
    paddingTop: 12.5,
    paddingBottom: 15.5,
    paddingLeft: 17,
    paddingRight: 12.5,
    justifyContent: 'space-between'
  },
  completeIconStyle: {
    width: 18,
    height: 18
  },
  notCompletedIconBgStyle: {
    height: 18,
    width: 18,
    backgroundColor: LIGHT_GREY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9
  },
  notCompletedIconStyle: {
    width: 8.2,
    height: 8.2
  },
  rowStyle: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleTextStyle: {
    fontFamily: 'CircularStd-Medium'
  },
  smallTextStyle: {
    fontSize: 12.5
  },
  progressBarStyle: {
    marginBottom: 2
  }
});

ChallengeCard.propTypes = {
  imageSource: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  activeScore: PropTypes.number,
  activeScoregoal: PropTypes.number,
  rank: PropTypes.number,
  participants: PropTypes.number
};

export default ChallengeCard;
