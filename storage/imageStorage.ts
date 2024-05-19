import { getSimpleData, saveSimpleData } from "./genericDataStorage";

export const saveImages = async (value: string) => {
  try {
    await saveSimpleData("targetDate", value);
  } catch (e) {
    // saving error
  }
};

export const getImages = async () => {
  try {
    return await getSimpleData("targetDate");
  } catch (e) {
    // error reading value
  }
};
