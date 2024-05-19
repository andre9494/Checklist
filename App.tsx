import { View } from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { Moment } from "moment";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { getDate } from "./storage/dateStorage";
import moment from "moment";
import CONSTANTS from "./constans";
import TextField from "./components/TextField";
import Container from "./layouts/Container";
import Button from "./components/Button";

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
      
      <Container>
        <TextField>asdi oh o ho h duashdosala</TextField>
        <TextField>asdi oh o ho h duashdosala</TextField>
        <TextField>asdi oh o ho h duashdosala</TextField>
        <Button text={"AAA"} onClick={function (): void {
          throw new Error("Function not implemented.");
        } }/>
      </Container>
      <StatusBar style="light" />
      <Toast />
    </View>
  );
}
