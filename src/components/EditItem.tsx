import { TextInput, TextStyle, View } from "react-native";
import Checkbox from "expo-checkbox";
import Container from "../layouts/Container";
import { useState } from "react";
import { COLORS } from "../../styles";
import IListItem from "../interfaces/IListItem";
import CONSTANTS from "../constants";

const EditItem = (props: { item: IListItem }) => {
  // const { text, edit, setEdit, onBlur } = props;
  const [finished, setFinished] = useState<boolean>(false);
  const [item, setItem] = useState<IListItem>(props.item);

  const updateItem = () => {
    props.item = item;
    setItem({ ...item });
  };

  const onEndEditing = (e: any) => {
    
    
    const newValue: string = e.nativeEvent.text;
    
    console.log("onEndEditing ", newValue);
    if (newValue) {
      item.title = newValue;
    }
    updateItem();
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
        </View>
      </View>
      <View style={{ backgroundColor: "#FFF", height: 0.5 }}></View>
    </View>
  );
};
export default EditItem;
