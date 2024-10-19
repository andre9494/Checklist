import AsyncStorage from "@react-native-async-storage/async-storage";
class GenericDataStorage {
  static saveSimpleData = async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  };

  static getSimpleData = async (key: string): Promise<string | undefined> => {
    try {
      const value: string | null = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return value;
      }
    } catch (e) {
      // error reading value
    }
  };

  static saveData = async (key: string, value: Object): Promise<void> => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  static getData = async (key: string): Promise<Object | undefined> => {
    try {
      const jsonValue: string | null = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
}
export default GenericDataStorage;