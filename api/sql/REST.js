// var bcrypt = require('bcrypt');
// var mysql   = require("mysql");
// var mongoose = require('mongoose');
// var fs = require('fs');
// var jpeg = require('jpeg-js');
// var randomstring = require("randomstring");
//
// function REST_ROUTER(router,connection) {
//     var self = this;
//     self.handleRoutes(router,connection);
// }
//
// REST_ROUTER.prototype.handleRoutes = function(router,connection) {
//
// //*****************
// //*     users     *
// //*****************
//     router.get("/users", (req,res) => {
//         var query = "SELECT * FROM ??";
//         var table = ["users"];
//         query = mysql.format(query,table);
//         connection.query(query, (err,rows) => {
//             if(err) {
//                 res.json({"Error" : true, "Message" : "Error executing MySQL query"});
//             } else {
//                 res.json(rows);
//             }
//         });
//     });
//
//     router.get("/SqlToMongo/albums", (req, res) => {
//         var self = this;
//         var query = "SELECT art_nom, alb_nom, alb_annee from artists, albums where art_id = alb_art";
//         query = mysql.format(query);
//         connection.query(query, (err,rows) => {
//             if(err) {
//                 res.json({"Error" : true, "Message" : "Error executing MySQL query"});
//             } else {
//                 rows.forEach((row) => {
//                   var image = self.createRawImage();
//                   var imageName = randomstring.generate({
//                     length: 12,
//                     charset: 'alphabetic'
//                   });
//                   self.saveImage();
//                 });
//                 res.json(rows);
//             }
//         });
//     })
// };
// REST_ROUTER.prototype.saveImage = function(rawImage, imageName) {
//   var dir = "C:\\MAMP\\htdocs\\img\\"
//   var jpegImageData = jpeg.encode(rawImage, 50);
//   fs.writeFile(dir + imageName, jpegImageData, 'binary', function(err){
//             if (err) throw err
//             console.log('File saved.')
//   })
// }
// REST_ROUTER.prototype.createRawImage = function() {
//   var width = 320, height = 180;
//   var frameData = new Buffer(width * height * 4);
//   var i = 0;
//   while (i < frameData.length) {
//     frameData[i++] = 0xFF; // red
//     frameData[i++] = 0x00; // green
//     frameData[i++] = 0x00; // blue
//     frameData[i++] = 0xFF; // alpha - ignored in JPEGs
//   }
//   var rawImageData = {
//     data: frameData,
//     width: width,
//     height: height
//   };
//   return rawImageData;
// }
//
// module.exports = REST_ROUTER;
