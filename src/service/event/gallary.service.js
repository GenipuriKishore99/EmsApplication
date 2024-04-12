import { getData,saveData } from "../context.service";
const url="   http://localhost:3000/gallaryimages/";
export function getImageGallary(){
    return getData(url);
}

export function saveImageGallary(data){
    return saveData(url,data)
}