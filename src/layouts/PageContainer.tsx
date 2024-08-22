import { View } from "react-native";
import styles from "../../styles";

const PageContainer = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return <View style={{ ...styles.pageContainer }}>{children}</View>;
};

export default PageContainer;
