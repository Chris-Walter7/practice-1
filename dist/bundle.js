(()=>{"use strict";const e=[{userid:"127e4567-e89b-12d3-a458-426614174000",name:"John",birthdate:"1982-02-17T21:00:00.000Z",age:40,organisation:{name:"Amazon",position:"General manager"}},{userid:"127e4567-e89a-12f3-a458-327395154000",name:"Anna",birthdate:"1988-02-17T21:00:00.000Z",age:34,organisation:{name:"Amazon",position:"Manager"}}],n=function(n){const a=[];return Array.isArray(n)&&n.forEach((n=>{let r;if(r=e.find((e=>e.userid===n.userid)),r){const e={name:r.name,position:r.organisation.position,age:r.age,gender:"man"};a.push(e)}})),a}([{userid:"127e4567-e89b-12d3-a458-426614174000",name:"John",gender:"man"},{userid:"127e4567-e89a-12f3-a458-327395154000",name:"Anna",gender:"woman"}]);console.log("newUserArray",n)})();