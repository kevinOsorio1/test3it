import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};

  return Reanimated;
});

global.__reanimatedWorkletInit = jest.fn();
jest.mock('react-navigation-hooks', () => ({
  useNavigation: () => jest.fn(),
  useNavigationParam: jest.fn(
    jest.requireActual('react-navigation-hooks').useNavigationParam,
  ),
}));

const mockedNavigation = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockedNavigation,
      setOptions: mockedNavigation,
      getParent: () => ({setOptions: mockedNavigation}),
    };
  },
}));
