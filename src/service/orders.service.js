import { getData, getDataById, saveData, updateData } from "./context.service";
const url="  http://localhost:3000/Orders/";
export function getOrders(){
    return getData(url)
}

export function saveOrders(data){
    return saveData(url,data);
}

export function getDataOrders(id){
    return getDataById(url,id);
}

export function getOrdersData(id,data){
    return updateData(url,id,data);
}

