import { useEffect, useState } from "react";
import Item from "../components/Item";
import PageContainer from "../layouts/PageContainer";
import Button from "../components/Button";
import { View } from "react-native";
import IListItem from "../interfaces/ListItem";
import { getAllCurrentItems } from "../storage/listStorage";

const List = () => {
  const [listItem, setListItem] = useState<Array<IListItem>>();
  const [edit, setEdit] = useState<boolean>(true);
  

  useEffect(() => {
    getAllCurrentItems().then((list: Array<IListItem>) => {
      setListItem(list);
    });
  }, []);

  return (
    <PageContainer>
      <View style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button text="Add" onClick={() => {setEdit(!edit)}} />
      </View>
      

      <Item text={"Exemplo"}  edit={edit} onBlur={()=>setEdit(false)}/>
    </PageContainer>
  );
};
export default List;
