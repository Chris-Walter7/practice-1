import { usersArray } from "./users";
import { usersInfoArray } from "./userInfo";
//interface IUserCustom extends IUserInfo, IUserOrganisation {
//gender?: GenderTypes
//}
function getUsersJobPosition(usersArray) {
    const newUserArray = [];
    if (Array.isArray(usersArray)) {
        usersArray.forEach((elUser) => {
            let userInfo;
            // @ts-ignore
            userInfo = usersInfoArray.find(el => el.userid === elUser.userid);
            if (userInfo) {
                const newUserObject = {
                    name: userInfo.name,
                    position: userInfo.organisation.position,
                    age: userInfo.age,
                    gender: '3'
                };
                newUserArray.push(newUserObject);
            }
        });
    }
    return newUserArray;
}
const newUserArray = getUsersJobPosition(usersArray);
console.log('newUserArray', newUserArray);
//# sourceMappingURL=index.js.map