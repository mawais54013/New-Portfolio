var config = {
    apiKey: "AIzaSyA-KhA8l-wE6JDDllKY-3edr6VasbjGwJA",
    authDomain: "contact-92333.firebaseapp.com",
    databaseURL: "https://contact-92333.firebaseio.com",
    projectId: "contact-92333",
    storageBucket: "contact-92333.appspot.com",
    messagingSenderId: "403061162353"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-message-btn").on("click", function(event){
    alert("Thank you, your message has been submitted");
    event.preventDefault();
    var name = $("#inputName").val().trim();
    var email = $("#inputEmail").val().trim();
    var phone = $("#inputPhone").val().trim();
    var message = $("#inputMessage").val().trim();

    var newMessage = 
    {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    database.ref().push(newMessage);

    $("#inputName").val(" ");
    $("#inputEmail").val(" ");
    $("#inputPhone").val(" ");
    $("#inputMessage").val(" ");
  });