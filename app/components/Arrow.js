/* libs */
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

/* styles */
import appStyles from '@styles/global';
import images from '@styles/images';

/* utils */
import { square } from '@utils/area';

const onPress = whenPushed => {
  if (whenPushed) {
    whenPushed();
  }
};

export const Icon = ({
  name,
  color: tintColor,
  extraStyles,
  whenPushed,
  label
}) => (
  <TouchableOpacity
    accessibilityLabel={label}
    onPress={() => onPress(whenPushed)}
    hitSlop={square(30)}
  >
    <Image
      source={images[name]}
      style={[appStyles.navBarIcon, { tintColor }, extraStyles]}
    />
  </TouchableOpacity>
);

const Arrow = ({ direction, ...otherProps }) => (
  <Icon name={direction} {...otherProps} />
);

Arrow.propTypes = {
  direction: PropTypes.string,
  color: PropTypes.string,
  whenPushed: PropTypes.func.isRequired,
  extraStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  whenPushed: PropTypes.func.isRequired,
  extraStyles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ]),
  label: PropTypes.string
};

export default Arrow;
