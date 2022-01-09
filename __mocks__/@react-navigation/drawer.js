module.exports = {
  createDrawerNavigator() {
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
