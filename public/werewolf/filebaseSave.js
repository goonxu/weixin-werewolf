var Firebase = require("firebase");

// firebase suport
function saveRoomInFirebase(jsonData) {
    var date = Math.floor(Date.now() / 1000 / 3600 / 24);
    var room = Math.floor(Math.random() * 10000);
    var myFirebaseRef = new Firebase("https://wechatwerewolf.firebaseio.com/" + date + "/" + room);
    myFirebaseRef.set(jsonData);
}
