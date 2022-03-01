import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

const mockedNavigate = jest.fn();

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

// const CONSOLE_FAIL_TYPES = ["error", "warn"];

// // Throw errors when a `console.error` or `console.warn` happens
// // by overriding the functions
// CONSOLE_FAIL_TYPES.forEach((type) => {
//   console[type] = (message) => {
//     throw new Error(
//       `Failing due to console.${type} while running test!\n\n${message}`
//     );
//   };
// });
