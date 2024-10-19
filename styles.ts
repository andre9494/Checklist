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
  greyC: "#CCC",
  font: "#FFF",
  background: "#223",
  squareGreen: "#368056",
  squareRed: "#c74444",
  delete: "#F00",
};

export const swipeListStyles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    flex: 1,
  },
  backTextWhite: {
    color: COLORS.white,
  },
  rowFront: {
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: COLORS.delete,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: COLORS.delete,
    right: 0,
  },
  rowFrontContainer: {
    backgroundColor: COLORS.background,
  },
});

const styles = StyleSheet.create({
  appBackground: {
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.background,
  },
  centeredContainer: layouts.centeredContainer,
  pageContainer: {
    ...layouts.container,
    marginVertical: 50,
  },
  container: layouts.container,
  text: { color: COLORS.font },
  square: layouts.square,
});

export default styles;
