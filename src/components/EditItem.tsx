import { TextInput, View } from "react-native";
import Checkbox from "expo-checkbox";
import Container from "../layouts/Container";
import { useState } from "react";
import { COLORS } from "../../styles";
import IListItem, { createNewListItem } from "../interfaces/IListItem";

const EditItem = (props: { setNewItem: React.Dispatch<React.SetStateAction<IListItem | undefined>> }) => {
  const { setNewItem } = props;
  const [finished, setFinished] = useState<boolean>(false);

  const onEndEditing = (e: any) => {
    const newTitle: string = e.nativeEvent.text;
    setNewItem(createNewListItem(newTitle));
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
                  // placeholder={item.title || CONSTANTS.STRING.WRITE_YOUR_ITEM}
                  // placeholderTextColor={COLORS.greyC}
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
