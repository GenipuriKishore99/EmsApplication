import {getData} from '../service/context.service';
const url="  http://localhost:3000/user/";

export function getUsers(){
    return getData(url);
}