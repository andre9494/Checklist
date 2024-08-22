import { TextInput, TextStyle, TouchableOpacity, View } from "react-native";
import TextField from "./TextField";
import Checkbox from "expo-checkbox";
import Container from "../layouts/Container";
import { useState } from "react";
import { COLORS } from "../../styles";
import IconButton from "./util/IconButton";
import IListItem from "../interfaces/ListItem";

const Item = (props: { item: IListItem }) => {
  // const { text, edit, setEdit, onBlur } = props;
  // const { item } = props;
  const [finished, setFinished] = useState<boolean>(false);
  const [item, setItem] = useState<IListItem>(props.item);

  const refreshItem = () => {
    setItem({ ...item });
  };

  const strikeThroughStyle: TextStyle = {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  };

  // console.log("item: " + item.id + ", edit:", item.edit);

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
            <>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <TextInput
                    style={{
                      marginHorizontal: 20,
                      marginVertical: 14,
                      fontSize: 18,
                      color: COLORS.white,
                    }}
                    placeholder="Write your item"
                    placeholderTextColor={COLORS.greyD}
                    onEndEditing={() => {
                      // item.title 
                      item.edit = false;
                      refreshItem();
                    }}
                    autoFocus={true}
                  />
                </View>
                {/* <View style={{ alignSelf: "center", flex: 0 }}>
                  <IconButton
                    icon="add-circle-outline"
                    onClick={() => {
                      return;
                    }}
                  />
                </View> */}
              </View>
            </>
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
