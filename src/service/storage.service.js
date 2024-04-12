export function saveDataToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getDataFromLocalStorage(key) {
  return localStorage.getItem(key);
}
export function removeDataFromLocalStorage(key) {
  localStorage.removeItem(key);
}

export function clearDataFromLocalStorage(key) {
  localStorage.clear(key);
}

export function saveDataToSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}

export function getDataFromSessionStorage(key) {
  return sessionStorage.getItem(key);
}

export function removeDataFromSessionStorage(key) {
  sessionStorage.removeItem(key);
}

export function clearDataFromSessionStorage(key) {
  sessionStorage.clear(key);
}

//cookie
export function saveDataFromCookie(key,value,expires) {
  document.cookie = key + "=" + value + ";expires=" + expires + ";";
}
export function getDataFromCookie() {
  return document.cookie;
}

//window
export function saveDataFromWindowObject(data){
    window.user=data
}

export function getDataFromWindowObject(){
    return window.user;
}
