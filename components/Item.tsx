import { TextInput, TextStyle, TouchableOpacity, View } from "react-native";
import TextField from "./TextField";
import Checkbox from "expo-checkbox";
import Container from "../layouts/Container";
import { useState } from "react";
import { COLORS } from "../styles";
import IconButton from "./util/IconButton";

const Item = (props: {
  text: string;
  edit?: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  onBlur: () => void;
}) => {
  const { text, edit, setEdit, onBlur } = props;
  const [finished, setFinished] = useState<boolean>(false);

  const strikeThroughStyle: TextStyle = {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  };

  const checkEditable = () => edit;

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
          {checkEditable() ? (
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
                    onEndEditing={onBlur}
                  />
                </View>
                <View style={{ alignSelf: "center", flex: 0 }}>
                  <IconButton
                    icon="add-circle-outline"
                    onClick={() => {
                      return;
                    }}
                  />
                </View>
              </View>
            </>
          ) : (
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingVertical: 14,
              }}
            >
              <TextField
                style={{
                  ...{ fontSize: 18 },
                  ...(finished ? strikeThroughStyle : {}),
                }}
              >
                {text}
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
