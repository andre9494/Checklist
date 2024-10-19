import * as Crypto from 'expo-crypto'

interface IListItem {
  id: string;
  title: string;
  finished: boolean;
  deleted: boolean;
}

export default IListItem;

export const createNewListItem = (title: string): IListItem => ({
  id: Crypto.randomUUID(),
  title: title,
  finished: false,
  deleted: false,
});
