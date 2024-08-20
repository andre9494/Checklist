import { useEffect, useState } from "react";
import PageContainer from "../layouts/PageContainer";
import Button from "../components/util/Button";
import { View } from "react-native";
import IListItem from "../interfaces/ListItem";
import { getAllCurrentItems } from "../storage/listStorage";
import SwipeList from "../components/SwipeList";
import Item from "../components/Item";
import ISwipeListItem from "../interfaces/ISwipeListItem";

const List = () => {
  const [data, setData] = useState<Array<IListItem>>();
  const [listItems, setListItems] = useState<Array<ISwipeListItem>>([]);
  const [edit, setEdit] = useState<boolean>(true);
  const [editId, setEditId] = useState<string | undefined>("2");

  useEffect(() => {
    getAllCurrentItems().then((list: Array<IListItem>) => {
      // setListItem(list);
      const a = [
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
          id: "3",
          title: "teste3",
          finished: false,
          deleted: false,
        },
        {
          id: "4",
          title: "teste4",
          finished: false,
          deleted: false,
        },
        {
          id: "5",
          title: "teste5",
          finished: false,
          deleted: false,
        },
      ];
      setData(a);
      setListItems(a.map((x) => ({ key: x.id, text: x.title })));
    });
  }, []);

  const renderItem = (selected: { item: ISwipeListItem }) => {
    const item: IListItem | undefined = data?.find(
      (x: IListItem) => x.id == selected.item.key,
    );
    return (
      <>
        {item && (
          <Item
            text={item.title}
            edit={edit && item.id == editId}
            setEdit={setEdit}
            onBlur={() => setEdit(false)}
          />
        )}
      </>
    );
  };

  const onDelete = (key: string) => {
    if (data) {
      const filteredData = [...data.filter((x: IListItem) => x.id != key)];
      setData(filteredData);
    }
  };

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
      <SwipeList
        renderItem={renderItem}
        listData={listItems}
        setListData={setListItems}
        onDelete={onDelete}
      />
    </PageContainer>
  );
};
export default List;
