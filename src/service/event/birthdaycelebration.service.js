import { getData,saveData } from "../context.service";
const url=" http://localhost:3000/birthdaycelebrations/";
export function getBirthdayCelebrationData(){
    return getData(url);
}
export function saveBirthdayCelebrationData(data){
    return saveData(url,data.id,data)
}