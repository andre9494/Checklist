import { TextInput, TextStyle, TouchableOpacity, View } from "react-native";
import TextField from "./TextField";
import Checkbox from "expo-checkbox";
import Container from "../layouts/Container";
import { useState } from "react";
import { COLORS } from "../../styles";
import IListItem from "../interfaces/ListItem";
import CONSTANTS from "../constants";

const Item = (props: { item: IListItem }) => {
  // const { text, edit, setEdit, onBlur } = props;
  // const { item } = props;
  const [finished, setFinished] = useState<boolean>(false);
  const [item, setItem] = useState<IListItem>(props.item);

  const refreshItem = () => {
    props.item = item;
    setItem({ ...item });
  };

  const strikeThroughStyle: TextStyle = {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  };

  // console.log("item: " + item.id + ", edit:", item.edit);

  const onEndEditing = (e: any) => {
    
    console.log("onEndEditing ", item.id);

    const newValue = e.nativeEvent.text;
    if (newValue) {
      item.title = newValue;
    }
    item.edit = false;
    refreshItem();
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
                setFinished(!finished);
              }}
            />
          </Container>
        </View>
        <View style={{ flex: 1 }}>
          {item.edit ? (
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    marginHorizontal: 20,
                    marginVertical: 14,
                    fontSize: 18,
                    color: COLORS.white,
                  }}
                  placeholder={item.title || CONSTANTS.STRING.WRITE_YOUR_ITEM}
                  placeholderTextColor={COLORS.greyC}
                  autoFocus={true}
                  onEndEditing={onEndEditing}
                />
              </View>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingVertical: 14,
              }}
              onPress={() => {
                item.edit = true;

                refreshItem();
              }}
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
          )}
        </View>
      </View>
      <View style={{ backgroundColor: "#FFF", height: 0.5 }}></View>
    </View>
  );
};
export default Item;
