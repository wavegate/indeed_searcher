import "./main.css";

var moment = require("moment");
var myDate = new Date();
var myCoolDate = moment(myDate).format("LL");

alert(myCoolDate);
