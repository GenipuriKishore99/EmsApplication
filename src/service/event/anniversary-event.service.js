import { getData, saveData, updateData } from "../context.service";

const url="   http://localhost:3000/anniversdayevent/";

export  function getAnniversaryData(){
    return getData(url)
}

export function saveAnniversaryData(data){
    return saveData(url,data)
}

export function updateAnniversaryData(data,id){
    return updateData(url,data.id,data);
}