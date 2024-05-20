import IListItem from "../interfaces/ListItem";
import { getData, saveData } from "./genericDataStorage";

const key: string = "itemList";

/**
 * Adds Item to List
 * @param item
 */
export const addItem = async (item: IListItem): Promise<void> => {
  try {
    let items: Array<IListItem> | undefined = (await getData(key)) as
      | Array<IListItem>
      | undefined;
    if (!items) {
      items = [];
    }
    items.push(item);
    await saveData(key, items);
  } catch (e) {
    // saving error
  }
};

/**
 * Removes Item from List
 * @param item
 */
export const removeItem = async (item: IListItem): Promise<void> => {
  try {
    let items: Array<IListItem> | undefined = (await getData(key)) as
      | Array<IListItem>
      | undefined;
    if (!items) {
      return;
    }
    items = items.filter((i: IListItem) => i.id == item.id);
    await saveData(key, items);
  } catch (e) {
    // saving error
  }
};

/**
 * Updates Item, picking by id and updating the remaining properties
 * @param item
 */
export const updateItem = async (item: IListItem): Promise<void> => {
  try {
    let items: Array<IListItem> | undefined = (await getData(key)) as
      | Array<IListItem>
      | undefined;
    if (!items) {
      return;
    }
    const index: number = items.findIndex((i: IListItem) => i.id == item.id);
    items[index] = { ...item };
    await saveData(key, items);
  } catch (e) {
    // saving error
  }
};

/**
 * deletes Item
 * if para item is string, id should be passed
 * @param item
 */
export const deleteItem = async (item: IListItem | string): Promise<void> => {
  try {
    let items: Array<IListItem> | undefined = (await getData(key)) as
      | Array<IListItem>
      | undefined;
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
    await saveData(key, items);
  } catch (e) {
    // saving error
  }
};

/**
 * gets Items list
 * @returns Array<IListItem>
 */
export const getAllItems = async (): Promise<Array<IListItem> | undefined> => {
  try {
    return (await getData(key)) as Array<IListItem> | undefined;
  } catch (e) {
    // error reading value
  }
};

/**
 * get Items that werent deleted
 * @returns Array<IListItem>
 */
export const getAllCurrentItems = async (): Promise<
  Array<IListItem> | undefined
> => {
  try {
    return ((await getData(key)) as Array<IListItem> | undefined)?.filter(
      (item: IListItem) => !item.deleted,
    );
  } catch (e) {
    // error reading value
  }
};

/**
 * get Items that were deleted
 * @returns Array<IListItem>
 */
export const getAllDeletedItems = async (): Promise<
  Array<IListItem> | undefined
> => {
  try {
    return ((await getData(key)) as Array<IListItem> | undefined)?.filter(
      (item: IListItem) => item.deleted,
    );
  } catch (e) {
    // error reading value
  }
};

/**
 * gets Item by id
 * @param id
 * @returns IListItem
 */
export const getItemById = async (
  id: string,
): Promise<IListItem | undefined> => {
  try {
    return ((await getData(key)) as Array<IListItem> | undefined)?.find(
      (item: IListItem) => item.id == id,
    );
  } catch (e) {
    // error reading value
  }
};
