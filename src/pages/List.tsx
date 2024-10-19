import { useEffect, useState } from "react";
import PageContainer from "../layouts/PageContainer";
import Button from "../components/util/Button";
import { View } from "react-native";
import IListItem from "../interfaces/IListItem";
import { getAllCurrentItems } from "../storage/listStorage";
import SwipeList from "../components/SwipeList";
import Item from "../components/Item";
import ISwipeListItem from "../interfaces/ISwipeListItem";
import CONSTANTS from "../constants";
import EditItem from "../components/EditItem";

const List = () => {
  const [data, setData] = useState<Array<IListItem>>();
  const [listItems, setListItems] = useState<Array<ISwipeListItem>>([]);
  const [newItem, setNewItem] = useState<IListItem>();
  const [add, setAdd] = useState<boolean>();

  useEffect(() => {
    getAllCurrentItems().then((list: Array<IListItem>) => {
      //#region mockdata
      const a = [
        {
          id: "1",
          title: "teste 1",
          finished: false,
          deleted: false,
          edit: false,
        },
        {
          id: "2",
          title: "teste 2",
          finished: false,
          deleted: false,
          edit: false,
        },
        {
          id: "3",
          title: "teste 3",
          finished: false,
          deleted: false,
          edit: false,
        },
        {
          id: "4",
          title: "teste 4",
          finished: false,
          deleted: false,
          edit: false,
        },
        {
          id: "5",
          title: "teste 5",
          finished: false,
          deleted: false,
          edit: false,
        },
        // {
        //   id: "6",
        //   title: "teste 1",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "7",
        //   title: "teste 2",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "8",
        //   title: "teste 3",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "9",
        //   title: "teste 4",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "10",
        //   title: "teste 5",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "11",
        //   title: "teste 1",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "12",
        //   title: "teste 2",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "13",
        //   title: "teste 3",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "14",
        //   title: "teste 4",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "15",
        //   title: "teste 5",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "16",
        //   title: "teste 1",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "17",
        //   title: "teste 2",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "18",
        //   title: "teste 3",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "19",
        //   title: "limit before failing",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "20",
        //   title: "teste 5",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "21",
        //   title: "teste 1",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "22",
        //   title: "teste 2",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "23",
        //   title: "teste 3",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "24",
        //   title: "teste 4",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
        // {
        //   id: "25",
        //   title: "teste 5",
        //   finished: false,
        //   deleted: false,
        //   edit: false,
        // },
      ];
      // #endregion
      setData(a ?? []);
      setListItems(a.map((x) => ({ key: x.id, text: x.title })));
    });
  }, []);

  useEffect(() => {
    if (data && newItem && newItem.title) {
      data.push(newItem);
      setData([...data]);
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
      const filteredData = [...data.filter((x: IListItem) => x.id != key)];
      setData(filteredData);
    }
  };
  //#endregion

  const addOnClick = () => {
    setAdd(true);
  };

  return (
    <PageContainer
      onClick={() => {
        if (newItem) {
          setNewItem(undefined);
        }
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Button text={CONSTANTS.STRING.ADD} onClick={addOnClick} />
      </View>
      {add && <EditItem setNewItem={setNewItem} />}
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
