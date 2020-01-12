/* libs */
import { StyleSheet } from 'react-native';

/* helpers */
import { PAGE_PADDING } from './spacing';
import { WHITE } from './colors';

const appStyles = StyleSheet.create({
  //icon in tab navigator
  tabNavIcon: {
    width: 22,
    height: 22
  },
  //icon in navbar
  navBarIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
  },
  //a full width
  fullWidth: {
    flex: 1
  },
  //a full width container
  fullWidthContainer: {
    flex: 1,
    backgroundColor: WHITE
  },
  //a full width container with predefined padding
  paddedContainer: {
    flex: 1,
    paddingHorizontal: PAGE_PADDING,
    backgroundColor: WHITE
  },
  //row with space in between elements
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  //left justified row
  rowLeftJustified: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

export default appStyles;
