const appKey = "mechtech";
const defaultDur = 60000 * 60 * 24; // 1 Day
export const getStorageKey = () => appKey;

export function setToStorage(value, key = appKey, ttl = defaultDur) {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getFromStorage(key = appKey) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export function removeFromStorage(key = appKey) {
  localStorage.removeItem(key);
}