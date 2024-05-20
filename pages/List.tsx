import { useState } from "react";
import Item from "../components/Item";
import PageContainer from "../layouts/PageContainer";

const List = () => {
    const [example, setExample] = useState<string>("");
  return (
    <PageContainer>
      <Item text={"Exemplo"}/>
    </PageContainer>
  );
};
export default List;
