import {usersArray} from "./users";
import {usersInfoArray} from "./userInfo";
import {GenderTypes, IUser} from "./interfaces/user";
import {IUserInfo, IUserJobPosition} from "./interfaces/userInfo";


//interface IUserCustom extends IUserInfo, IUserOrganisation {
    //gender?: GenderTypes
//}

function getUsersJobPosition (usersArray: IUser[]): IUserJobPosition[] {
    const newUserArray: IUserJobPosition[] = [];

    if (Array.isArray(usersArray)) {
        usersArray.forEach((elUser) => {
            let userInfo: IUserInfo;
            // @ts-ignore
            userInfo = usersInfoArray.find(el => el.userid === elUser.userid);
            if (userInfo) {
                const newUserObject: IUserJobPosition = {
                    name: userInfo.name,
                        position: userInfo.organisation.position,
                        age: userInfo.age,
                        gender: 'man'
                }
                newUserArray.push(newUserObject);
            }
        })
    }
    return newUserArray;
}

const newUserArray = getUsersJobPosition(usersArray);
console.log('newUserArray', newUserArray);