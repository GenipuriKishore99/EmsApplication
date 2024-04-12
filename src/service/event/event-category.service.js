import { saveData ,getData, updateData} from "../context.service"
const url=" http://localhost:3000/eventcategory/";
export function getEventCategoryData(){
    return getData(url);
}
export function saveEventCategoryData(data){
    return saveData(url,data)
}

export function updateEventCategory(data,id){
    return updateData(url,data.id,data)
}