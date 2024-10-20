import { View, ViewStyle } from "react-native";
import styles from "../../styles";

const Container = (props: {
  children: React.ReactNode;
  style?:ViewStyle
}) => {
  const { children, style } = props;
  
  const containerStyle: ViewStyle = { ...styles.container, ...style };
  
  return (
    <View
      style={containerStyle}
    >
      {children}
    </View>
  );
};

export default Container;
