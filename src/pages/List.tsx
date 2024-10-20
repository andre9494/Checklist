import { SetStateAction, useEffect, useState } from "react";
import PageContainer from "../layouts/PageContainer";
import Button from "../components/util/Button";
import { View, Text } from "react-native";
import IListItem from "../interfaces/IListItem";
import SwipeList from "../components/SwipeList";
import Item from "../components/Item";
import ISwipeListItem, { updateSwipeList } from "../interfaces/ISwipeListItem";
import CONSTANTS from "../constants";
import EditItem from "../components/EditItem";
import ListStorage from "../storage/listStorage";
import ModalComponent from "../components/util/Modal";
import Details from "./Details";

const List = () => {
  const [data, setData] = useState<Array<IListItem>>();
  const [listItems, setListItems] = useState<Array<ISwipeListItem>>([]);
  const [newItem, setNewItem] = useState<IListItem>();
  const [add, setAdd] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    ListStorage.getAllCurrentItems().then((list: Array<IListItem>) => {
      setData(list ?? []);
      setListItems(updateSwipeList(list));
    });
  }, []);

  useEffect(() => {
    if (data && newItem && newItem.title) {
      data.unshift(newItem);
      setData([...data]);
      setListItems([...updateSwipeList(data)]);
      ListStorage.addItem(newItem);
    }
  }, [newItem]);

  //#region item support functions
  const renderItem = (selected: { item: ISwipeListItem }) => {
    const item: IListItem | undefined = data?.find(
      (x: IListItem) => x.id == selected.item.key,
    );
    return (
      <>
        {item && (
          <Item
            item={item}
            onclick={() => {
              console.log("teste");
              setShowModal(true);
            }}
          />
        )}
      </>
    );
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
          flexDirection: "column",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 7,
          }}
        >
          {add && <EditItem setNewItem={setNewItem} setAdd={setAdd} />}
          <SwipeList
            renderItem={renderItem}
            listData={listItems}
            setListData={setListItems}
            onDelete={onDelete}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            marginLeft: 5,
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <View>
            <Button text={CONSTANTS.STRING.ADD} onClick={addOnClick} />
          </View>
        </View>
      </View>
      <Details
        showModalState={{
          showModal: showModal,
          setShowModal: setShowModal,
        }}
      />
    </PageContainer>
  );
};
export default List;
