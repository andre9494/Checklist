import { View } from "react-native";
import styles from "../styles";

const Container = (props: {
  children: React.ReactNode;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  color?:string;
}) => {
  const { children, paddingHorizontal, paddingVertical, marginHorizontal, marginVertical, color } = props;
  
  const containerStyle = {...styles.container};
  if (marginHorizontal) {
    containerStyle.marginHorizontal = marginHorizontal;
  }
  if (marginVertical) {
    containerStyle.marginVertical = marginVertical;
  }
  if (paddingHorizontal) {
    containerStyle.paddingHorizontal = paddingHorizontal;
  }
  if (paddingVertical) {
    containerStyle.paddingVertical = paddingVertical;
  }
  if (color) {
    containerStyle.backgroundColor = color;
  }

  return (
    <View
      style={containerStyle}
    >
      {children}
    </View>
  );
};

export default Container;
