import Item from "../components/Item";
import PageContainer from "../layouts/PageContainer";

const List = () => {
  return (
    <PageContainer>
      <Item text={"Exemplo"} onClick={function (): void {}} />
      <Item text={"Exemplo"} onClick={function (): void {}} />
      <Item text={"Exemplo"} onClick={function (): void {}} />
      <Item text={"Exemplo"} onClick={function (): void {}} />
    </PageContainer>
  );
};
export default List;
