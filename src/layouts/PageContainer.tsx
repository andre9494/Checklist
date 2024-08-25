import { TouchableWithoutFeedback, View } from "react-native";
import styles from "../../styles";

const PageContainer = (props: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const { children, onClick } = props;

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View
        style={{
          ...styles.pageContainer,
          height: "100%",
          backgroundColor: "#F00",
        }}
        
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PageContainer;
