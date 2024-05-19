import { View } from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { Moment } from "moment";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { getDate } from "./storage/dateStorage";
import moment from "moment";
import CONSTANTS from "./constans";
import Item from "./components/Item";
import PageContainer from "./layouts/PageContainer";

export default function App() {
  const [targetDate, setTargetDate] = useState<Moment>();
  useEffect(() => {
    getDate().then((date: string | undefined) => {
      if (date) {
        setTargetDate(moment(date, CONSTANTS.DATEPICKER_FORMAT));
      }
    });
  }, []);
  return (
    <View style={styles.appBackground}>
      
      <PageContainer>
        <Item text={"Exemplo"} onClick={function (): void {
        } }/>        
      </PageContainer>
      <StatusBar style="light" />
      <Toast />
    </View>
  );
}
