import furniture from "./sanity/schemas/furniture";

export type FeatureType = {
    icon: string;
    title: string;
    description: string;
}

export type furnitureType = {
    _id: string,
    title:string,
    slug:{current:string},
    body:any,
    mainImage:any,
    price:number,
    unit: '$' | '€' | '£' | any,
    materials: any[],
    categories: any[],
    _createAt: string,
    _updateat: string,
    quantity:number,
}

export type CartType = {
    image: string,
    title: string,
    curency?:'$'|'€'|'£'
    description: string,
    price:number,
    quantity:number,
}

export type UserType = {
    _id: string,
    _updatedAt: string,
    email: string,
    _createdAt: string,
    profile: string,
    name: string,
}