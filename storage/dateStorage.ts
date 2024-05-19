import { getSimpleData, saveSimpleData } from "./genericDataStorage";

export const saveDate = async (value: string) => {
  try {
    await saveSimpleData("targetDate", value);
  } catch (e) {
    // saving error
  }
};

export const getDate = async () => {
  try {
    return await getSimpleData("targetDate");
  } catch (e) {
    // error reading value
  }
};
