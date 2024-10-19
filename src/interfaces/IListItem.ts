interface IListItem {
  id: string;
  title: string;
  finished: boolean;
  deleted: boolean;
}

export default IListItem;

const createNewListItem = (title: string): IListItem => ({
  id: crypto.randomUUID(),
  title: title,
  finished: false,
  deleted: false,
});
