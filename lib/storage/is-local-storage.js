import { getLocaleStorage } from "./get-local-storage.js";

export const isLocalStorageByKey = (key) => {
  const value = getLocaleStorage(key);
  return value?.length > 0;
};
