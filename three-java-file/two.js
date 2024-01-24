// const users = [
//     {
//     _id: 'abl2ex',
//      username: 'Alex',
//      email: 'alex@alex.com',
//      password: '123123',
//      createdAt:'08/01/2022 9:00 AM',
//     isLoggedln: false
//     },
//     {
//     _id: 'fgl2cy', username: 'Asab', email: 'asab@asab.com', password: '123456', createdAt:'08/01/2022 9:30 AM', isLoggedln: true
//     },
//     {
//     _id: 'zwf8md',
//     username: 'Brook',
//     email: 'brook@brook.com', password: '123111',
//     createdAt:'08/01/2022 9:45 AM', isLoggedln: true
//     },
//     {
//     _id: 'eefamr', username: 'Martha', email: 'martha@hiartha.com', password: '123222', createdAt:'08/01/2022 9:50 AM', isLoggedln: false
//     },
//     {
//     _id: 'ghderc',
//     username: 'Thomas',
//     email: 'thomas@thomas.com', password: '123333',
//     createdAt:'08/01/2022 10:00 AM', isLoggedln: false
//     }
//     ];

// 1. Userlar ro'yhatidan userning id si orqali topib beruvchi funksiya yarating

// function findUserById(users, userId) {
//     const findId = users.filter((users) => {
//         return users._id === userId; 
//     });
//     console.log(findId);
// }

// findUserById(users, 'ghderc');


// function findUserByEmail(users, userEmail) {
//     const findEmail = users.filter((users) => {
//         return users.email === userEmail; 
//     });
//     console.log(findEmail);
// }

// findUserByEmail(users, 'thomas@thomas.com');



// function findUserByLoggin(users, userloggin) {
//     const findLoggin = users.filter((users) => {
//         return users.isLoggedln === userloggin; 
//     });
//     console.log(findLoggin);
// }

// findUserByLoggin(users, true);