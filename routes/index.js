var path = require("path");

exports.index = function(req, res){
  res.render('index', { title: "Ejemplos de Passport"});
};

