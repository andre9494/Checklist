import { View } from "react-native";
import styles from "../../styles";

const CenteredContainer = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <View style={{ ...styles.centeredContainer, ...styles.pageContainer }}>
      {children}
    </View>
  );
};

export default CenteredContainer;
