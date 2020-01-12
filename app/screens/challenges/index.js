/* libs */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* components */
import Page from '@components/Page';
import Text from '@components/Text';
import Divider from './components/Divider';
import List from './components/List';
/* strings */
import { STRINGS } from '@localization/Strings';

/* styles */
import appStyles from '@styles/global';
import images from '@styles/images';
import { DARK } from '@styles/colors';

/* utils */
import { square } from '../../utils/area';

import { fetchChallenges } from '../../utils/fakeRequest';

class Challenges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publicChallenges: [],
      soloChallenges: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.available !== this.props.available) {
      this.setChallengesState();
    }
  }

  componentDidMount() {
    this.loadChallenges();
  }

  setChallengesState = () => {
    const { available } = this.props;

    this.setState({
      publicChallenges: available.filter(
        challenge => challenge.type === 'leaderboard'
      ),
      soloChallenges: available.filter(challenge => challenge.type === 'timer')
    });
  };

  loadChallenges = async () => {
    const { makeRequest, resetRequest, getChallenges } = this.props;
    makeRequest();
    try {
      const challengesResponse = await fetchChallenges();
      getChallenges(challengesResponse);
    } catch (error) {
      console.error(error);
    } finally {
      resetRequest();
    }
  };

  navigate = screen => {
    this.props.navigation.navigate(screen);
  };

  render() {
    const { inProgress } = this.props;
    if (inProgress) {
      return (
        <Page title={STRINGS.ChallengesTitle}>
          <ActivityIndicator size="small" color={DARK} />
        </Page>
      );
    }
    return (
      <Page title={STRINGS.ChallengesTitle}>
        <View style={appStyles.paddedContainer}>
          {/* Public challenges */}
          <List
            title={STRINGS.PublicChallengesTitle}
            description={STRINGS.PublicChallengesDescription}
            data={this.state.publicChallenges}
          />

          {/* Solo challenges */}
          <List
            displayMode="grid"
            title={STRINGS.SoloChallengesTitle}
            description={STRINGS.SoloChallengesDescription}
            data={this.state.soloChallenges}
          />

          {/* Past challenges */}
          <TouchableWithoutFeedback
            hitSlop={square(30)}
            onPress={() => this.navigate('PastChallenges')}
          >
            <View
              style={[appStyles.rowSpaceBetween, styles.pastChallengeContainer]}
            >
              <Text bold style={styles.text}>
                {STRINGS.PastChallenges}
              </Text>
              <Image
                source={images.right}
                style={[appStyles.navBarIcon, styles.arrow]}
              />
            </View>
          </TouchableWithoutFeedback>

          <Divider />
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  pastChallengeContainer: {
    alignItems: 'center'
  },
  text: {
    fontSize: 17
  },
  arrow: {
    tintColor: DARK
  }
});

Challenges.propTypes = {
  navigation: PropTypes.object,
  available: PropTypes.array,
  makeRequest: PropTypes.func,
  resetRequest: PropTypes.func,
  getChallenges: PropTypes.func,
  inProgress: PropTypes.bool
};

const mapStateToProps = state => ({
  available: state.challenges.available,
  inProgress: state.challenges.in_progress
});

const mapDispatchToProps = dispatch => ({
  getChallenges: payload => dispatch({ type: 'GET_CHALLENGES', payload }),
  makeRequest: () => dispatch({ type: 'MAKE_CHALLENGE_REQUEST' }),
  resetRequest: () => dispatch({ type: 'RESET_CHALLENGE_REQUEST' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Challenges);
