const functions = require('firebase-functions');
exports.saludo = functions.https.onRequest((request, response) => {
 try {
   if (!request.query.numero1) {
     throw new Error("No ha ingresado el numero");
   } else if (!request.query.numero2) {
     throw new Error("No ha ingresado el numero 2");
   }
   var suma = parseInt(request.query.numero1)+parseInt(request.query.numero2);
   response.send(`El resultado de  ${request.query.numero1} y  de ${request.query.numero2} es: `+suma);
 } catch (e) {
   response.send(e.message);
 }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
