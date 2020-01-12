/* libs */
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

/* components */
import Text from '@components/Text';

/* styles */
import appStyles from '@styles/global';
import { MAIN_COLOR, MEDIUM } from '@styles/colors';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  statusContainer: {
    marginTop: 10
  },
  textStatus: {
    fontSize: 12
  },
  textHeader: {
    marginTop: 10,
    fontSize: 17
  },
  left: {
    marginRight: 7.5
  },
  right: {
    marginLeft: 7.5
  }
});

const Item = ({
  displayMode,
  name,
  image_url,
  index,
  count_down,
  status,
  onPress
}) => {
  let gridStyle = null;
  if (displayMode === 'grid') {
    gridStyle = index % 2 === 0 ? styles.left : styles.right;
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, gridStyle]}>
        <Image
          source={{ uri: image_url }}
          style={{ borderRadius: 4, height: height / 4.7 }}
        />
        <View style={[appStyles.rowLeftJustified, styles.statusContainer]}>
          <Text bold color={MAIN_COLOR} style={styles.textStatus}>
            {status}
          </Text>
          <Text style={styles.textStatus}>{` · ${count_down}`}</Text>
        </View>
        <Text bold color={MEDIUM} style={styles.textHeader}>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
