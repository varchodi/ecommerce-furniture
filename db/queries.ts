import { client } from "@/db/sanity"

export const getMainPageFurnitures = '*[_type=="furniture"][0...4]{title,slug{current},body,mainImage,price,unit,_id}'

export const getFurniture = (id:string):string=> {
    return `*[_type=="furniture" && _id=="${id}"]{materials,_type,body,title,_createAt,_id,categories,slug{current},mainImage,unit,price,_updateAt}`
}

export const getFurnituresBymaterial = (ref:string):string=> {
    return `*[_type=="furniture" && "${ref}" in materials[]._ref]{materials,_type,body,title,_createAt,_id,categories,slug{current},mainImage,unit,price,_updateAt}`
}
export const getFurnituresByCategory = (ref:string):string=> {
    return `*[_type=="furniture" && "${ref}" in categories[]._ref]{materials,_type,body,title,_createAt,_id,categories,slug{current},mainImage,unit,price,_updateAt}`
}
export const userQuery = (email: string): string => {
    return `*[_type=="user" && email=="${email}"]`
}