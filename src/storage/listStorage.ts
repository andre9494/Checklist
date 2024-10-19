import IListItem from "../interfaces/IListItem";
import GenericDataStorage from "./genericDataStorage";
const key: string = "itemList";
class ListStorage {

  /**
   * Adds Item to List
   * @param item
   */
  static addItem = async (item: IListItem): Promise<void> => {
    try {
      let items: Array<IListItem> | undefined =
        (await GenericDataStorage.getData(key)) as Array<IListItem> | undefined;
      if (!items) {
        items = [];
      }
      items.unshift(item);
      await GenericDataStorage.saveData(key, items);
    } catch (e) {
      // saving error
    }
  };

  /**
   * Removes Item from List
   * @param item
   */
  static removeItem = async (item: IListItem): Promise<void> => {
    try {
      let items: Array<IListItem> | undefined =
        (await GenericDataStorage.getData(key)) as Array<IListItem> | undefined;
      if (!items) {
        return;
      }
      items = items.filter((i: IListItem) => i.id == item.id);
      await GenericDataStorage.saveData(key, items);
    } catch (e) {
      // saving error
    }
  };

  /**
   * Updates Item, picking by id and updating the remaining properties
   * @param item
   */
  static updateItem = async (item: IListItem): Promise<void> => {
    try {
      let items: Array<IListItem> | undefined =
        (await GenericDataStorage.getData(key)) as Array<IListItem> | undefined;
      if (!items) {
        return;
      }
      const index: number = items.findIndex((i: IListItem) => i.id == item.id);
      items[index] = { ...item };
      await GenericDataStorage.saveData(key, items);
    } catch (e) {
      // saving error
    }
  };

  /**
   * deletes Item
   * if para item is string, id should be passed
   * @param item
   */
  static deleteItem = async (item: IListItem | string): Promise<void> => {
    try {
      let items: Array<IListItem> | undefined =
        (await GenericDataStorage.getData(key)) as Array<IListItem> | undefined;
      if (!items) {
        return;
      }
      if (typeof item == "string") {
        const index: number = items.findIndex(
          (i: IListItem) => i.id == (item as string),
        );
        items[index] = { ...items[index], deleted: true };
      } else {
        const index: number = items.findIndex(
          (i: IListItem) => i.id == (item as IListItem).id,
        );
        items[index] = { ...items[index], deleted: true };
      }
      await GenericDataStorage.saveData(key, items);
    } catch (e) {
      // saving error
    }
  };

  /**
   * deletes all items
   */
  static deleteAllItems = async (): Promise<void> => {
    await GenericDataStorage.saveData(key, []);
  };

  /**
   * gets Items list
   * @returns Array<IListItem>
   */
  static getAllItems = async (): Promise<Array<IListItem>> => {
    try {
      return (
        ((await GenericDataStorage.getData(key)) as Array<IListItem>) ?? []
      );
    } catch (e) {
      return [];
      // error reading value
    }
  };

  /**
   * get Items that werent deleted
   * @returns Array<IListItem>
   */
  static getAllCurrentItems = async (): Promise<Array<IListItem>> => {
    try {
      return (
        ((await GenericDataStorage.getData(key)) as Array<IListItem>)?.filter(
          (item: IListItem) => !item.deleted,
        ) || []
      );
    } catch (e) {
      return [];
      // error reading value
    }
  };

  /**
   * get Items that were deleted
   * @returns Array<IListItem>
   */
  static getAllDeletedItems = async (): Promise<Array<IListItem>> => {
    try {
      return (
        ((await GenericDataStorage.getData(key)) as Array<IListItem>)?.filter(
          (item: IListItem) => item.deleted,
        ) || []
      );
    } catch (e) {
      return [];
      // error reading value
    }
  };

  /**
   * gets Item by id
   * @param id
   * @returns IListItem
   */
  static getItemById = async (id: string): Promise<IListItem | undefined> => {
    try {
      return (
        (await GenericDataStorage.getData(key)) as Array<IListItem> | undefined
      )?.find((item: IListItem) => item.id == id);
    } catch (e) {
      // error reading value
    }
  };
}

export default ListStorage;
