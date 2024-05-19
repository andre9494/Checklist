import { View } from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import List from "./pages/List";

export default function App() {
  return (
    <View style={styles.appBackground}>
      <List />
      <StatusBar style="light" />
      <Toast />
    </View>
  );
}
