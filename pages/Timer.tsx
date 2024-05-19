import { View } from "react-native";
import Square from "../components/Square";
import TextField from "../components/TextField";
import styles, { COLORS } from "../styles";
import moment, { Duration, Moment } from "moment";
import { useEffect, useState } from "react";
import IAttribute from "../interfaces/IAttribute";
import CenteredContainer from "../layouts/CenteredContainer";
import Button from "../components/Button";
import { saveDate } from "../storage/dateStorage";

const Timer = (props: {
  targetDate: Moment;
  setTargetDate: React.Dispatch<React.SetStateAction<Moment | undefined>>;
}) => {
  const { targetDate, setTargetDate } = props;
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 100);
  }, [count]);
  const currentDate: Moment = moment();
  const duration: Duration = moment.duration(targetDate.diff(currentDate));

  const squares: Array<Array<IAttribute>> = [
    [
      { label: "Years", value: duration.years() },
      { label: "Months", value: duration.months() },
      { label: "Days", value: duration.days() },
    ],
    [
      { label: "Hours", value: duration.hours() },
      { label: "Minutes", value: duration.minutes() },
      { label: "Seconds", value: duration.seconds() },
    ],
  ];

  const checkIfGone = (time: IAttribute): boolean => {
    switch (time.label) {
      case "Seconds":
        return (
          checkIfGone({ label: "MInutes", value: time.value }) &&
          duration.seconds() == 0
        );
      case "Minutes":
        return (
          checkIfGone({ label: "Hours", value: time.value }) &&
          duration.minutes() == 0
        );
      case "Hours":
        return (
          checkIfGone({ label: "Days", value: time.value }) &&
          duration.hours() == 0
        );
      case "Days":
        return (
          checkIfGone({ label: "Months", value: time.value }) &&
          duration.days() == 0
        );
      case "Months":
        return (
          checkIfGone({ label: "Years", value: time.value }) &&
          duration.months() == 0
        );
      case "Years":
        return duration.years() == 0;
      default:
        return false; // Handle invalid cases
    }
  };

  return (
    <CenteredContainer>
      <TextField style={{ fontSize: 20 }}>Time left:</TextField>
      {squares.map((line: Array<IAttribute>, index: number) => (
        <View
          key={index}
          style={{ ...styles.container, display: "flex", flexDirection: "row" }}
        >
          {line.map((time: IAttribute) => (
            <View key={index + time.label} style={styles.container}>
              <TextField>{time.label}</TextField>
              <Square
                color={
                  checkIfGone(time) ? COLORS.squareRed : COLORS.squareGreen
                }
              >
                {time.value}
              </Square>
            </View>
          ))}
        </View>
      ))}
      <Button
        text={"Reset Date"}
        onClick={() => {
          saveDate("");
          setTargetDate(undefined);
        }}
      />
    </CenteredContainer>
  );
};

export default Timer;
