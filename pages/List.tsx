import { useEffect, useState } from "react";
import PageContainer from "../layouts/PageContainer";
import Button from "../components/Button";
import { View } from "react-native";
import IListItem from "../interfaces/ListItem";
import { getAllCurrentItems } from "../storage/listStorage";
import SwipeList from "../components/SwipeList";

const List = () => {
  const [listItem, setListItem] = useState<Array<IListItem>>();
  const [edit, setEdit] = useState<boolean>(true);
  const [editId, setEditId] = useState<string | undefined>("askdsa");

  useEffect(() => {
    getAllCurrentItems().then((list: Array<IListItem>) => {
      // setListItem(list);
      setListItem([
        {
          id: "1",
          title: "teste1",
          finished: false,
          deleted: false,
        },
        {
          id: "2",
          title: "teste2",
          finished: false,
          deleted: false,
        },
        {
          id: "1",
          title: "teste3",
          finished: false,
          deleted: false,
        },
      ]);
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

      {/* <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SwipeList />
        </View>
        <View style={{ backgroundColor: "#FFF", height: 0.5 }}></View>
      </View> */}
      <SwipeList />

      {/* <Item
        text={"Exemplo"}
        edit={edit}
        setEdit={setEdit}
        editId={editId}
        onBlur={() => setEdit(false)}
        setEditId={setEditId}
      /> */}

      {/* <SwipeListContainer/> */}

      {/* <SwipeListView
        data={listItem?.map((item) => ({ ...Item, key: item.id }))}
        renderItem={(data, rowMap) => (
          <Item
            text={"Exemplo"}
            edit={edit}
            setEdit={setEdit}
            editId={editId}
            onBlur={() => setEdit(false)}
            setEditId={setEditId}
          />
        )}
        // renderHiddenItem={ (data, rowMap) => (
        //     <View style={styles.rowBack}>
        //         <Text>Left</Text>
        //         <Text>Right</Text>
        //     </View>
        // )}
        // leftOpenValue={75}
        rightOpenValue={-75}
      /> */}

      {/* <View style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button text="Save" onClick={() => {setEdit(!edit)}} />
      </View> */}

      {/* {listItem?.map((item: IListItem) => <TextField>{item.title}</TextField>)} */}
    </PageContainer>
  );
};
export default List;
