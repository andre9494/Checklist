import { TextStyle, TouchableOpacity, View } from "react-native";
import TextField from "./TextField";
import Checkbox from "expo-checkbox";
import Container from "../layouts/Container";
import { useState } from "react";
import IListItem from "../interfaces/IListItem";
import ListStorage from "../storage/listStorage";

const Item = (props: {
  item: IListItem;
  onclick?: () => void;
  refreshData?: (item:IListItem) => void;
}) => {
  const { onclick, refreshData } = props;
  const [finished, setFinished] = useState<boolean>(props.item.finished);
  const [item, setItem] = useState<IListItem>(props.item);

  const refreshItem = () => {
    setItem({ ...item });
    ListStorage.updateItem(item);
    if(refreshData){
      refreshData(item);
    }
  };

  const strikeThroughStyle: TextStyle = {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  };

  return (
    <View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ flex: 0 }}>
          <Container>
            <Checkbox
              value={finished}
              onValueChange={() => {
                item.finished = !finished;
                setFinished(!finished);
                refreshItem();
              }}
            />
          </Container>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 14,
            }}
            onPress={onclick}
          >
            <TextField
              style={{
                ...{ fontSize: 18 },
                ...(finished ? strikeThroughStyle : {}),
              }}
            >
              {item.title}
            </TextField>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "#FFF", height: 0.5 }}></View>
    </View>
  );
};
export default Item;
