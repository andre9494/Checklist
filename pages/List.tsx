import { useState } from "react";
import Item from "../components/Item";
import PageContainer from "../layouts/PageContainer";
import Button from "../components/Button";
import { View } from "react-native";
import IListItem from "../interfaces/ListItem";

const List = () => {
  const [finished, setFinished] = useState<IListItem>();
  
  return (
    <PageContainer>
      <View style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button text="Add" onClick={() => {}} />
      </View>
      

      <Item text={"Exemplo"} />
    </PageContainer>
  );
};
export default List;
