const user = [
    {id:2, name:'abul', job:'doctor'}
];
// console.log(user[0].name);

const data = {
    count : 5000,
    data:[
        {id:1, name:'rahat', job:'student'},
        {id:2, name:'tanjid', job:'internship'},
    ]
}
const user2 = {
    id:5002,
    name : 'jhankar',
    adress:{
        street : {
            first : '35/A kochukhet lane',
            second : 'third floor',
            third : 'right side'
        },
        postoffice : 'cantonment',
        city : 'dhaka'
    }
}
// console.log(data.count);
// console.log(data.data[1].job);
const userDetails = user2.adress.city;
console.log(userDetails);
const details2 = user2.adress.street;
console.log(details2);