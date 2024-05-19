import {
  TouchableOpacity,
  View,
} from "react-native";
import TextField from "./TextField";
import Checkbox from "expo-checkbox";
import Container from "../layouts/Container";
import { useState } from "react";

const Item = (props: { text: string; onClick: () => void }) => {
  const { text, onClick } = props;
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ flex: 0 }}>
          <Container>
            <Checkbox
              value={selected}
              onValueChange={() => {setSelected(!selected)}}
              // color={isChecked ? '#4630EB' : undefined}
            />
          </Container>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 14,
            }}
          >
            <TextField style={{ fontSize: 18 }}>{text}</TextField>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "#FFF", height: 0.5 }}></View>
    </View>
  );
};
export default Item;
