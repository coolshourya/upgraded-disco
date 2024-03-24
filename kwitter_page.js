const firebaseConfig = {
    apiKey: "AIzaSyBpoO3yKEZTc0ATpthuHO-BdhxpKwOoBM0",
    authDomain: "chaty-4f749.firebaseapp.com",
    databaseURL: "https://chaty-4f749-default-rtdb.firebaseio.com",
    projectId: "chaty-4f749",
    storageBucket: "chaty-4f749.appspot.com",
    messagingSenderId: "644233214896",
    appId: "1:644233214896:web:3798e4f644326c0734f475",
    measurementId: "G-RYQTV8LSB3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  Username=localStorage.getItem("username"); 
  room=localStorage.getItem("room"); 

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room");
     window.location="index.html";
  

  }
  function send(){
    messege=document.getElementById("YMCA").value;
    firebase.database().ref(room).push({
        name:Username,
        messege:messege,
        like:0
    });
    document.getElementById("YMCA").value="";
  }