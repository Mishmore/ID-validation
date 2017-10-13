// import TecactusApi from 'reniec-sunat-js';

// module.exports = (router) => {

//     let token = 'BQQAy3nslnuejowJaL7bvS6PB0qir1LoXyVZuURD';

//     router.post('/validateDni', (req, res) => {

//         let tecatus = new TecactusApi(token);
//         const userid = req.body.dni;

//         if (userid) {

//             tecatus.Reniec.getDni(userid)
//                 .then(function (response) {
//                     console.log("correct");
//                     console.log(response.data);
//                 })
//                 .catch(function (response) {
//                     console.log("Something happened");
//                     console.log("Error code: " + response.code);
//                     console.log("Response message: " + response.status);
//                     console.log(response.data);
//                 })

//         } else {

//             res.json({
//                 success: false,
//                 message: "Incorrect parameters"
//             });

//         }

//     });

//     return router;

// }