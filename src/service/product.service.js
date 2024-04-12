import { getData } from "./context.service"
const url=" http://localhost:3000/Products";
export function getProduct(){
    return getData(url);
}