import {GenderTypes} from "./user";

export interface IUserOrganisation {
    name?: string;
    position?: string;
}

let userName = true;
export interface IUserInfo {
    userid?: string;
    name?:string;
    birthdate?: string;
    age?: number;
    organisation?: IUserOrganisation
}
export interface IUserJobPosition {
    name: string,
    position: string,
    age: number,
    gender: GenderTypes
}