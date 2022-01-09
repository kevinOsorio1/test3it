module.exports = {
  createNativeStackNavigator() {
    return {
      Navigator(props) {
        return props.children;
      },
      Screen() {
        return null;
      },
    };
  },
};
