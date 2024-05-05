const figlet = require("figlet");

figlet("Ciao, Andrea", function (err, data) {
    if (err) {
      console.log("Non funziona");
      console.dir(err);
      return;
    }
    console.log(data);
  });