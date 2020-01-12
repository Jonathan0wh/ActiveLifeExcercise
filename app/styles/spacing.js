import { Platform, StatusBar } from "react-native";
import { isIphoneX } from 'react-native-iphone-x-helper';

const getStatusBarHeight = () => {
  if (Platform.OS === "android") {
    return StatusBar.currentHeight;
  }

  if (isIphoneX()) {
    return 44;
  }
  return 20;
};

export const PAGE_PADDING = 30
export const STATUS_BAR_HEIGHT = getStatusBarHeight();
export const NAV_BAR_HEIGHT = Platform.select({
  ios: 44,
  android: 54 - StatusBar.currentHeight
})