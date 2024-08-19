import { SetStateAction, useEffect, useState } from "react";
import Item from "../components/Item";
import PageContainer from "../layouts/PageContainer";
import Button from "../components/Button";
import { View } from "react-native";
import IListItem from "../interfaces/ListItem";
import { getAllCurrentItems } from "../storage/listStorage";
import TextField from "../components/TextField";

const List = () => {
  const [listItem, setListItem] = useState<Array<IListItem>>();
  const [edit, setEdit] = useState<boolean>(true);
  const [editId, setEditId] = useState<string | undefined>("askdsa");

  useEffect(() => {
    getAllCurrentItems().then((list: Array<IListItem>) => {
      setListItem(list);
    });
  }, []);

  return (
    <PageContainer>
      <View style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button
          text="Add"
          onClick={() => {
            setEdit(!edit);
          }}
        />
      </View>

      <Item
        text={"Exemplo"}
        edit={edit}
        setEdit={setEdit}
        editId={editId}
        onBlur={() => setEdit(false)}
        setEditId={setEditId}
      />
      {/* <View style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button text="Save" onClick={() => {setEdit(!edit)}} />
      </View> */}

      {listItem?.map((item: IListItem) => <TextField>{item.title}</TextField>)}
    </PageContainer>
  );
};
export default List;
