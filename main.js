var firebaseConfig = {
  apiKey: "AIzaSyBFwRuDipvuRxlZerGxzsaqtft4L8S1Ra0",
  authDomain: "class94-f8ea1.firebaseapp.com",
  databaseURL: "https://class94-f8ea1-default-rtdb.firebaseio.com",
  projectId: "class94-f8ea1",
  storageBucket: "class94-f8ea1.appspot.com",
  messagingSenderId: "374476056800",
  appId: "1:374476056800:web:f57ab451eb95a17f22c885",
  measurementId: "G-Z17LJN9D4F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
  user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
  });
}