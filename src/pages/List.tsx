import { useEffect, useState } from "react";
import PageContainer from "../layouts/PageContainer";
import Button from "../components/util/Button";
import { View } from "react-native";
import IListItem from "../interfaces/IListItem";
import SwipeList from "../components/SwipeList";
import Item from "../components/Item";
import ISwipeListItem, { updateSwipeList } from "../interfaces/ISwipeListItem";
import CONSTANTS from "../constants";
import EditItem from "../components/EditItem";
import ListStorage from "../storage/listStorage";

const List = () => {
  const [data, setData] = useState<Array<IListItem>>();
  const [listItems, setListItems] = useState<Array<ISwipeListItem>>([]);
  const [newItem, setNewItem] = useState<IListItem>();
  const [add, setAdd] = useState<boolean>(false);

  useEffect(() => {
    ListStorage.getAllCurrentItems().then((list: Array<IListItem>) => {
      // const a = [
      //   {
      //     id: "1",
      //     title: "teste 1",
      //     finished: false,
      //     deleted: false,
      //   },
      //   {
      //     id: "2",
      //     title: "teste 2",
      //     finished: false,
      //     deleted: false,
      //   },
      //   {
      //     id: "3",
      //     title: "teste 3",
      //     finished: false,
      //     deleted: false,
      //   },
      //   {
      //     id: "4",
      //     title: "teste 4",
      //     finished: false,
      //     deleted: false,
      //   },
      //   {
      //     id: "5",
      //     title: "teste 5",
      //     finished: false,
      //     deleted: false,
      //   },
      //   {
      //     id: "6",
      //     title: "teste 1",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "7",
      //     title: "teste 2",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "8",
      //     title: "teste 3",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "9",
      //     title: "teste 4",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "10",
      //     title: "teste 5",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "11",
      //     title: "teste 1",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "12",
      //     title: "teste 2",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "13",
      //     title: "teste 3",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "14",
      //     title: "teste 4",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "15",
      //     title: "teste 5",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "16",
      //     title: "teste 1",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "17",
      //     title: "teste 2",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "18",
      //     title: "teste 3",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "19",
      //     title: "limit before failing",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "20",
      //     title: "teste 5",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "21",
      //     title: "teste 1",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "22",
      //     title: "teste 2",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "23",
      //     title: "teste 3",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "24",
      //     title: "teste 4",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      //   {
      //     id: "25",
      //     title: "teste 5",
      //     finished: false,
      //     deleted: false,
      //     edit: false,
      //   },
      // ] as Array<IListItem>;
      
      setData(list ?? []);
      setListItems(updateSwipeList(list));
    });
  }, []);

  useEffect(() => {
    if (data && newItem && newItem.title) {
      data.push(newItem);
      setData([...data]);
      setListItems([...updateSwipeList(data)]);
      ListStorage.addItem(newItem);
    }
  }, [newItem]);

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  //#region item support functions
  const renderItem = (selected: { item: ISwipeListItem }) => {
    const item: IListItem | undefined = data?.find(
      (x: IListItem) => x.id == selected.item.key,
    );
    return <>{item && <Item item={item} />}</>;
  };

  const onDelete = (key: string) => {
    if (data) {
      const itemToDelete = data.find((item: IListItem) => item.id == key);
      if (itemToDelete) {
        const filteredData = [
          ...data.filter((item: IListItem) => item.id != itemToDelete.id),
        ];
        setData(filteredData);
        ListStorage.deleteItem(itemToDelete);
      }
    }
  };
  //#endregion

  const addOnClick = () => {
    setAdd(true);
  };

  return (
    <PageContainer>
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Button text={CONSTANTS.STRING.ADD} onClick={addOnClick} />
      </View>
      {add && <EditItem setNewItem={setNewItem} setAdd={setAdd} />}
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
