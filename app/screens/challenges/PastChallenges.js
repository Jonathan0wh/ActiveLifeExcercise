import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '@components/Arrow';
import Text from '@components/Text';
import Timeline from '@components/Timeline';
import ChallengeCard from './components/ChallengeCard';

import { STRINGS } from '@localization/Strings';
import { WHITE } from '@styles/colors';

import appStyles from '@styles/global';
import { MEDIUM, DIVIDER, MAIN_COLOR } from '@styles/colors';

import { getPastChallenge } from '../../actions/challenges';

class PastChallenges extends Component {
  componentDidMount() {
    if (this.props.pastChallenges.length === 0) {
      this.props.getPastChallenge();
    }
  }

  render() {
    return (
      <View style={[appStyles.fullWidth, styles.pageStyle]}>
        <View style={styles.headerStyle}>
          <TouchableOpacity>
            <Icon
              direction="left"
              color={MEDIUM}
              whenPushed={() => this.props.navigation.goBack()}
              extraStyles={styles.goBackIconStyles}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainTitleContainerStyle}>
          <Text bold>{STRINGS.PastChallenges}</Text>
        </View>
        {this.props.pastChallenges.length > 0 ? (
          <ScrollView contentContainerStyle={styles.challengesContainerStyle}>
            {this.props.pastChallenges.map((value, index) => (
              <Timeline key={index} title={value.month_year}>
                {value.challenges.map((challenge, index) => (
                  <ChallengeCard
                    key={index}
                    imageSource={challenge.image_url}
                    title={challenge.name}
                    date={challenge.date}
                    completed={challenge.won}
                    type={challenge.type}
                    activeScore={challenge.activity_score}
                    activeScoregoal={challenge.activity_score_goal}
                    rank={challenge.rank}
                    participants={challenge.participants}
                  />
                ))}
              </Timeline>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.loadingContainerStyle}>
            <ActivityIndicator size="large" color={MAIN_COLOR} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: WHITE
  },
  headerStyle: {
    marginTop: 20,
    height: 44,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: DIVIDER,
    paddingHorizontal: 25.1,
    paddingVertical: 15
  },
  goBackIconStyles: {
    height: 14,
    width: 7.9
  },
  mainTitleContainerStyle: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'center'
  },
  challengesContainerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  loadingContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

PastChallenges.propTypes = {
  navigation: PropTypes.object.isRequired,
  pastChallenges: PropTypes.array.isRequired,
  getPastChallenge: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  pastChallenges: state.challenges.past
});

const mapDispatchToProps = dispatch => ({
  getPastChallenge: () => dispatch(getPastChallenge())
});

export default connect(mapStateToProps, mapDispatchToProps)(PastChallenges);
