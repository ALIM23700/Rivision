"use strict";
//umeric enum
var userRequestType;
(function (userRequestType) {
    userRequestType[userRequestType["GetData"] = 1] = "GetData";
    userRequestType[userRequestType["Deletedata"] = 2] = "Deletedata";
    userRequestType[userRequestType["savedata"] = 3] = "savedata";
})(userRequestType || (userRequestType = {}));
//string enum
var userRequestType2;
(function (userRequestType2) {
    userRequestType2["GetData1"] = "hi";
    userRequestType2["Deletedata1"] = "hello";
    userRequestType2["savedata1"] = "gello";
})(userRequestType2 || (userRequestType2 = {}));
console.log(userRequestType);
console.log(userRequestType2);
