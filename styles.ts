import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export type Style = ViewStyle | TextStyle | ImageStyle;

const layouts: { [key: string]: Style } = {
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
};

export const COLORS = {
  transparent: "#0000",
  white: "#FFF",
  font: "#FFF",
  background: "#223",
  squareGreen: "#368056",
  squareRed: "#c74444",
};
// const fontColor = "#FFF";

const styles = StyleSheet.create({
  appBackground: {
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.background,
  },
  centeredContainer: layouts.centeredContainer,
  pageContainer: { ...layouts.container, marginVertical: 50 },
  container: layouts.container,
  text: { color: COLORS.font },
  square: layouts.square,
});

export default styles;
