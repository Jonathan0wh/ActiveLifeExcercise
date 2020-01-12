# Note

Need to change the following to make React Native 0.57.3 work with the latest Xcode (Version 11.3):

1. Change line 31 in `node_modules/react-native/local-cli/runIOS/findMatchingSimulator.js` to `!version.includes('iOS') && !version.includes('tvOS')`
2. Change line 36 and 37 in `node_modules/react-native/local-cli/runIOS/findMatchingSimulator.js` to `if (simulator.isAvailable === false) {`
3. Change line 94 and 95 in `node_modules/react-native/React/Base/RCTModuleMethod.mm` to `RCTReadString(input, "__attribute__((unused))") ||
         RCTReadString(input, "__attribute__((__unused__))");`
