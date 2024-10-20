import { TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import styles from "../../styles";

const PageContainer = (props: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: ViewStyle
}) => {
  const { children, onClick, style } = props;

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View
        style={{
          ...styles.pageContainer,
          height: "100%",
          ...style
        }}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PageContainer;
