import IListItem from "./IListItem";

interface ISwipeListItem {
  key: string;
  text: string;
}
export default ISwipeListItem;


export const updateSwipeList = (a: Array<IListItem>): Array<ISwipeListItem> =>
  a.map((x) => ({ key: x.id, text: x.title }));