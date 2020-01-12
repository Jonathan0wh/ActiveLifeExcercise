/* libs */
import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

/* components */
import Header from '../Header';
import Divider from '../Divider';
import Item from './Item';

/* styles */
import appStyles from '@styles/global';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  space: {
    marginTop: 10
  }
});

class List extends Component {
  onSelectChallenge = item => {
    console.log(`>>> Select challenge: ${item.name}`);
  };

  render() {
    const { data, description, displayMode, title } = this.props;
    return (
      <View style={appStyles.fullWidth}>
        <Header title={title} description={description} />
        <View style={styles.space} />
        <FlatList
          numColumns={2}
          data={data}
          extraData={data}
          keyExtractor={item => item.name}
          renderItem={({ item, index }) => (
            <Item
              {...item}
              index={index}
              displayMode={displayMode}
              onPress={() => this.onSelectChallenge(item)}
            />
          )}
        />
        <Divider />
      </View>
    );
  }
}

export default List;
